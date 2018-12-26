pragma solidity ^0.4.24;

contract Ownable {
  address public owner;
  event OwnershipRenounced(address indexed previousOwner);
  event OwnershipTransferred(
  address indexed previousOwner,
  address indexed newOwner
  );

  constructor() public {
    owner = msg.sender;
  }
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    emit OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }
}

library SafeMath {

  function mul(uint256 a, uint256 b) internal pure returns (uint256 c) {
    if (a == 0) {
      return 0;
    }
    c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    //assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    //assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256 c) {
    c = a + b;
    assert(c >= a);
    return c;
  }
}

contract ERC20Basic is Ownable{
  function totalSupply() public view returns (uint256);
  function balanceOf(address who) public view returns (uint256);
  function transfer(address to, uint256 value) public returns (bool);
  event Transfer(address indexed from, address indexed to, uint256 value);
}

contract ERC20 is ERC20Basic {
  function allowance(address owner, address spender) public view returns (uint256);
  function transferFrom(address from, address to, uint256 value) public returns (bool);
  function approve(address spender, uint256 value) public returns (bool);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract BasicToken is ERC20Basic {
  using SafeMath for uint256;
  mapping (address => bool) public frozenAccount; //Accounts frozen indefinitely
  mapping (address => uint256) public frozenTimestamp; //Limited frozen accounts
  mapping(address => uint256) balances;
  uint256 totalSupply_;

  event Mint(address indexed to, uint256 amount);

  function totalSupply() public view returns (uint256) {
    return totalSupply_;
  }

  function transfer(address _to, uint256 _value) public returns (bool) {
    require(_to != address(0));
    require(_value <= balances[msg.sender]);
    require(!frozenAccount[msg.sender]);
    require(now > frozenTimestamp[msg.sender]);
    _value = _value * (10 ** 18);
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[_to] = balances[_to].add(_value);
    frozenAccount[msg.sender] = true;
    frozenAccount[_to] = true;
    emit Transfer(msg.sender, _to, _value);
    return true;
  }

  function balanceOf(address _owner) public view returns (uint256) {
    return balances[_owner];
  }


  function freeze(address _target,bool _freeze) public returns (bool) {
    require(msg.sender == owner);
    require(_target != address(0));
    frozenAccount[_target] = _freeze;
    return true;
  }
}


contract StandardToken is ERC20, BasicToken {
  mapping (address => mapping (address => uint256)) internal allowed;
  mapping (address => uint) freezeCode;

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
    require(_to != address(0));
    require(_value <= balances[_from]);
    require(_value <= allowed[_from][_from]);
    require(!frozenAccount[_from]);
    require(!frozenAccount[_to]);
    require(balances[_from] >= freezeCode[_from]);
    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    allowed[_from][_from] = allowed[_from][_from].sub(_value);
    freezeCode[_from] = freezeCode[_from].sub(_value);
    emit Transfer(_from, _to, _value);
    return true;
  }

  function approve(address _spender, uint256 _value) public returns (bool) {
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }


  function allowance(address _owner, address _spender) public view returns (uint256) {
    return allowed[_owner][_spender];
  }
}
contract user_Token is StandardToken {
    string public  name = ""; // 
    string public  symbol = ""; // 
    uint8 public constant decimals = 18; 
    uint256 public constant INITIAL_SUPPLY = 0;
    uint256 public totalSupply = 0;
    uint8 support;
    uint8 quorum;
    uint8 duration = 24;
    
    constructor(string _name,string _symbol,uint256 _totalSupply,uint8 _support, uint8 _quorum, uint8 _duration, address _createAddress) public {
        name = _name; 
        symbol = _symbol;  
        totalSupply = _totalSupply * (10 ** uint256(decimals));
        support = _support;
        quorum = _quorum;
        duration = _duration;
        owner = _createAddress;
        balances[_createAddress] = balances[msg.sender].add(totalSupply);
        allowed[_createAddress][_createAddress] = totalSupply;
        frozenAccount[msg.sender] = true;
    }
      
    function mint(address _to, uint256 _amount) public returns (bool) {
        _amount = _amount * (10 ** uint256(decimals));
        totalSupply = totalSupply.add(_amount);
        balances[_to] = balances[_to].add(_amount);
        frozenAccount[_to] = true;
        allowed[_to][_to] = totalSupply;
        emit Mint(_to, _amount);
        emit Transfer(address(0), _to, _amount);
        return true;
    }
    

    /*个人信息录入*/
    uint userLength = 0;
    uint voterSize = 0;
    struct userMsg {
      string name;
      string surname;
      string sex;
      string nationality;
      string birDate;
      string passports;
      uint position;
      address userAddress;
    }
    
    mapping(uint => userMsg) userList;
    mapping(address => uint) userId;
    mapping(address => bool) userHaveVote;    
    function setKycUserMsg(string _name,string _surname,string _sex,string _nationality,string _birDate,string _passports,uint _position,address _userAddress) public {
        userList[userLength] = userMsg(_name,_surname,_sex,_nationality,_birDate,_passports,_position,_userAddress);
        userId[_userAddress] = userLength;
        userLength ++;
        if(_position == 2 || _position == 3 || _position == 5){
            voterSize ++;
            userHaveVote[_userAddress] = true;
        }
    }
    
    function getPosition(address _my) view public returns(uint){
        return userList[userId[_my]].position;
    }
    
     /*决议信息录入查询*/
    uint private voteLength = 0 ;
     
    struct voteModule {
      uint state;
      uint types;
      address myAddress;
      address toAddress;
      string content;
      uint numbers;
      uint successNum;
      uint failNum;
      uint createTime;
      uint takeCode;
      mapping(address => bool) userIsVote;
    }
    
    mapping(uint => voteModule) private voteList;
    
    event createVote( 
        address myAddress,
        uint indexed createTime,
        string indexed content,
        uint indexed numbers,
        uint codes
    );
    
    function _transfer(address _to, uint256 _value) public {
        frozenAccount[msg.sender] = false;
        transfer( _to,  _value);
    }
    
    function _transferFrom(address _from, address _to, uint256 _value) public {
        frozenAccount[_from] = false;
        frozenAccount[_to] = false;
        allowed[_to][_to] = totalSupply;
        transferFrom(_from, _to,  _value);
        frozenAccount[_from] = true;
        frozenAccount[_to] = true;
    }
    
    /*创建决议*/
    function addVoteList(uint _types,address _myAddress,address _toAddress,uint _numbers,string _content) public returns(uint){
        if(_types == 2){
             _numbers =  _numbers * (10 ** 18);
            require(balances[_myAddress].sub(freezeCode[_myAddress]) >= _numbers);
            freezeCode[_myAddress] = freezeCode[_myAddress].add(_numbers);
                
        }
        voteList[voteLength] = voteModule(0 ,_types,_myAddress,_toAddress,_content,_numbers,0,0,now,0);
        voteList[voteLength].userIsVote[msg.sender] = false;
        emit createVote(_myAddress,now,_content,_numbers, voteLength);
        voteLength = voteLength.add(1);
        
        return voteLength;
    }
    
    function setVoteList(uint code,bool _isVote) public returns(bool){
        require(now < voteList[code].createTime + duration * 1 hours);
        require(voteList[code].state == 0);
        require(!voteList[code].userIsVote[msg.sender]);
        require(userHaveVote[msg.sender]);
        voteList[code].takeCode = voteList[code].takeCode.add(1);
        if(_isVote){
            voteList[code].successNum = voteList[code].successNum.add(balances[msg.sender]);
            successCode(code);
        }else{
            voteList[code].failNum = voteList[code].failNum.add(balances[msg.sender]);
            if((voteList[code].failNum * 100) / totalSupply > (100 - support)){
                voteList[code].state = 2;
                if(voteList[code].types == 2){
                    freezeCode[voteList[code].myAddress] = freezeCode[voteList[code].myAddress].sub(voteList[code].numbers);
                }
            }else{
                successCode(code);
            }
        }
        voteList[code].userIsVote[msg.sender] = true;
        return true;
    }
    
    function successCode(uint code) public {
         if((voteList[code].successNum * 100) / totalSupply > support ){
            if((voteList[code].takeCode * 100) / voterSize > quorum){
                if(voteList[code].types == 1){
                    mint(voteList[code].toAddress,voteList[code].numbers);
                    if( balances[voteList[code].toAddress] > 0){
                        voterSize ++;
                        userHaveVote[voteList[code].toAddress] = true;
                        if(userList[userId[voteList[code].toAddress]].position == 1){
                            userList[userId[voteList[code].toAddress]].position = 3;
                        }else if(userList[userId[voteList[code].toAddress]].position == 4){
                            userList[userId[voteList[code].toAddress]].position = 5;
                        }else{
                            voterSize --;
                        }  
                    }
                }else if(voteList[code].types == 2){
                    _transferFrom(voteList[code].myAddress,voteList[code].toAddress,voteList[code].numbers);
                    if( balances[voteList[code].myAddress] <= 0){
                        voterSize --;
                        userHaveVote[voteList[code].myAddress] = false;
                        if(userList[userId[voteList[code].myAddress]].position == 2){
                            userList[userId[voteList[code].myAddress]].position = 0;
                        }else if(userList[userId[voteList[code].myAddress]].position == 3){
                            userList[userId[voteList[code].myAddress]].position = 1;
                        }else if(userList[userId[voteList[code].myAddress]].position == 5){
                            userList[userId[voteList[code].myAddress]].position = 4;
                        }else{
                            voterSize ++;
                        }
                    }
                    if( balances[voteList[code].toAddress] > 0){
                        voterSize ++;
                        userHaveVote[voteList[code].toAddress] = true;
                        if(userList[userId[voteList[code].toAddress]].position == 1){
                            userList[userId[voteList[code].toAddress]].position = 3;
                        }else if(userList[userId[voteList[code].toAddress]].position == 4){
                            userList[userId[voteList[code].toAddress]].position = 5;
                        }else{
                            voterSize --;
                        }  
                    }
                }
                voteList[code].state = 1;
            }
        }
    }
    
    function() payable public {
        revert();
    }
}