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


contract LTX_admin is Ownable {
    mapping (string => address) getTokenAddress;
    
    
    /*公司信息录入查询*/
    struct companyModule {
      string name;
      string code;
      string site;
      uint capital;
      string birDate;
      string only;
      string tokenAddress;
    }
    
    mapping(string => companyModule) private companyList;
    
    event createCompany( 
        string indexed tokenAddress,
        string indexed only,
        address indexed creater
     );
    
    
    /*创建公司*/
    function setCompanyList(string _name,string _code,string _site,uint _capital,string _birDate,string _only,string _tokenAddress) public returns(bool) {
        companyList[_only] = companyModule(_name,_code,_site,_capital,_birDate,_only,_tokenAddress);
        emit createCompany(_tokenAddress, _only,msg.sender);
        return true;
    }
    /*查询公司*/
    function getCompanyList(string _only) view public returns (string,string,string,uint,string,string,string) {
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
     function getCompanyAddress(string _only) view public returns (string) {
        return (
            companyList[_only].tokenAddress
        );
    }
    
    /*结束*/
    function() payable public {
        revert();
    }
}

