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
    
    
    
    mapping (string => address) getTokenAddress;
    
    
    /*公司信息录入查询*/
    struct companyModule {
      string name;
      uint code;
      string site;
      uint capital;
      string birDate;
      string only;
      address tokenAddress;
    }
    
    mapping(string => companyModule) private companyList;
    
    event createCompany( 
        address indexed tokenAddress,
        string indexed only,
        address indexed creater
     );
    
    
    /*创建公司*/
    function setCompanyList(string _name,uint _code,string _site,uint _capital,string _birDate,string _only,address _tokenAddress) public returns(bool) {
        companyList[_only] = companyModule(_name,_code,_site,_capital,_birDate,_only,_tokenAddress);
        emit createCompany(_tokenAddress, _only,msg.sender);
        return true;
    }
    /*查询公司*/
    function getCompanyList(string _only) view public returns (string,uint,string,uint,string,string,address) {
        return (
            companyList[_only].name,
            companyList[_only].code,
            companyList[_only].site,
            companyList[_only].capital,
            companyList[_only].birDate,
            companyList[_only].only,
             companyList[_only].tokenAddress
        );
    }
    /*查询公司token地址*/
     function getCompanyAddress(string _only) view public returns (address) {
        return (
            companyList[_only].tokenAddress
        );
    }
    
    
    
    /*
    
    
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
        require(_to != address(0));
        require(_initialSupply <= tokenList[_only].userCode[msg.sender]);
        tokenList[_only].userCode[_to] = tokenList[_only].userCode[_to].add(_initialSupply);
        tokenList[_only].userCode[msg.sender] = tokenList[_only].userCode[msg.sender].sub(_initialSupply);
        emit _Transfer(_to, _initialSupply);
        return true;
    }*/
    
    
    /*结束*/
    function() payable public {
        revert();
    }
}

