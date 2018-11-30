pragma solidity ^0.4.24;

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
contract test1 {
    
    using SafeMath for uint256;
    
    string public name;
    string public symbol;
    uint8 public decimals = 18;  // 18 是建议的默认值
    uint256 public totalSupply;
    uint8 public support;
    uint8 public quorum;
    uint8 public duration;
    
    
    mapping (address => uint256) public balanceOf;  
    mapping (address => mapping (address => uint256)) public allowance;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Mint(address indexed to, uint256 amount);
    
    /*Token信息录入查询*/  
    function createToken(uint256 _initialSupply, string _tokenName, string _tokenSymbol,uint8 _support,uint8 _quorum,uint8 _duration) public {
        totalSupply = _initialSupply * 10 ** uint256(decimals);
        balanceOf[msg.sender] = totalSupply;
        name = _tokenName;
        symbol = _tokenSymbol;
        support = _support;
        quorum = _quorum; 
        duration = _duration;
        emit Transfer(address(0), msg.sender , totalSupply);
    }
    
    function mint(address _to,uint256 _initialSupply) public returns (bool) {
        totalSupply = totalSupply.add(_initialSupply * 10 ** uint256(decimals));
        balanceOf[_to] = balanceOf[_to].add(_initialSupply);
        emit Mint(_to, _initialSupply);
        emit Transfer(address(0), _to, _initialSupply);
        return true;
    }
    
    function getTokenMsg() view public returns(string,string,uint256,uint8,uint8,uint8){
        return (name,symbol,totalSupply,support,quorum,duration);
    }
    
    /*公司信息录入查询*/
    struct companyList {
      string name;
      uint code;
      string site;
      uint capital;
      string birDate;
      string only;
    }
    
    companyList[] public companys;
    mapping(string => uint) companyCode;
    function setCompanyList(string _name,uint _code,string _site,uint _capital,string _birDate,string _only) public {
        uint code = companys.push(companyList(_name,_code,_site,_capital,_birDate,_only)) - 1;
        companyCode[_only] = code;
    }
    
    /*转账*/
    function transfer(address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        require(_value <= balanceOf[msg.sender]);
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        balanceOf[_from] = balanceOf[_from].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }
}




