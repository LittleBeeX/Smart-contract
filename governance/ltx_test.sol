pragma solidity ^0.4.24;

contract Ownable {
  address public owner;
  event OwnershipRenounced(address indexed previousOwner);
  event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner
  );

  /**
  * @dev The Ownable constructor sets the original `owner` of the contract to the sender
  * account.
  */
  constructor() public {
    owner = msg.sender;
  }

  /**
  * @dev Throws if called by any account other than the owner.
  */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
  * @dev Allows the current owner to transfer control of the contract to a newOwner.
  * @param newOwner The address to transfer ownership to.
  */

  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    emit OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }
}

/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */

library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */

  function mul(uint256 a, uint256 b) internal pure returns (uint256 c) {
    if (a == 0) {
      return 0;
    }
    c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    //assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    //assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  /**
  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */

  function add(uint256 a, uint256 b) internal pure returns (uint256 c) {
    c = a + b;
    assert(c >= a);
    return c;
  }
}

contract LTX_admin is Ownable {
    using SafeMath for uint256;
    
      /*Token录入查询*/
    struct tokenModule {
      string name;
      string symbol;
      uint256 totalSupply;
      uint8 support;
      uint8 quorum;
      uint8 duration;
      mapping(address => uint) userCode;
    }
    
    mapping(string => tokenModule) private tokenList;
    
    event createToken( 
        string indexed name,
        string indexed symbol,
        uint256 totalSupply
    );
    event _Mint(address indexed to, uint256 amount);
    event _Transfer(address indexed to, uint256 amount);
   /* Token信息录入查询增发转账 */  
    function setTokenList(string _only, uint256 _initialSupply, string _tokenName, string _tokenSymbol,uint8 _support,uint8 _quorum,uint8 _duration) public returns(bool) {
        tokenList[_only] = tokenModule(_tokenName,_tokenSymbol,_initialSupply,_support,_quorum,_duration);
        tokenList[_only].userCode[msg.sender] = _initialSupply;
        emit createToken(_tokenName,_tokenSymbol,_initialSupply);
        return true;
    }
    
   function getTokenList(string _only) view public returns (string,string,uint,uint,uint,uint) {
        return (
            tokenList[_only].name,
            tokenList[_only].symbol,
            tokenList[_only].totalSupply,
            tokenList[_only].support,
            tokenList[_only].quorum,
            tokenList[_only].duration
        );
    }
    
    function _mint(string _only, address _to, uint256 _initialSupply) public returns (bool) {
        tokenList[_only].userCode[_to] = _initialSupply;
        emit _Mint(_to, _initialSupply);
        return true;
    }
    
    function _transfer(string _only, address _to, uint256 _initialSupply) public returns (bool){
        tokenList[_only].userCode[_to] = tokenList[_only].userCode[_to].add(_initialSupply);
        tokenList[_only].userCode[msg.sender] = tokenList[_only].userCode[msg.sender].sub(_initialSupply);
        emit _Transfer(_to, _initialSupply);
        return true;
    }
    
    /*公司信息录入查询*/
    struct companyModule {
      string name;
      uint code;
      string site;
      uint capital;
      string birDate;
      string only;
    }
    
    mapping(string => companyModule) private companyList;
    
    event createCompany( 
        string names,
        string indexed only,
        address indexed creater
     );
    
    
    /*创建公司*/
    function setCompanyList(string _name,uint _code,string _site,uint _capital,string _birDate,string _only) public returns(bool) {
        companyList[_only] = companyModule(_name,_code,_site,_capital,_birDate,_only);
        emit createCompany(_name, _only,msg.sender);
        return true;
    }
    /*查询公司*/
    function getCompanyList(string _only) view public returns (string,uint,string,uint,string,string) {
        return (
            companyList[_only].name,
            companyList[_only].code,
            companyList[_only].site,
            companyList[_only].capital,
            companyList[_only].birDate,
            companyList[_only].only
        );
    }

    
    /*决议信息录入查询*/
    struct voteModule {
      string only;
      uint state;
      uint types;
      address myAddress;
      address toAddress;
      string content;
      uint numbers;
    }
    
    mapping(string => voteModule) private voteList;
    
    event createVote( 
        string indexed only,
        address myAddress,
        address toAddress,
        string content,
        uint indexed numbers
    );
    
    
    /*创建决议*/
    function setVoteList(string _only,uint _state,uint _types,address _myAddress,address _toAddress,string _content,uint _numbers) public returns(bool){
        if(_types == 2){
            _mint(_only, _toAddress,_numbers);
        }else if(_types == 3){
            _transfer(_only, _toAddress,_numbers);
        }
        voteList[_only] = voteModule(_only,_state,_types,_myAddress,_toAddress,_content,_numbers);
        emit createVote(_only,_myAddress,_toAddress,_content,_numbers);
        return true;
    }
    
    
    /*结束*/
    function() payable public {
        revert();
    }
}

