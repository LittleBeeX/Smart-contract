pragma solidity ^0.4.25;


/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */ 

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

contract Pausable is Ownable {
  event Pause();
  event Unpause();
  bool public paused = false;

/**
* @dev Modifier to make a function callable only when the contract is not paused.
*/
  modifier whenNotPaused() {
    require(!paused);
    _;
  }

/**
* @dev Modifier to make a function callable only when the contract is paused.
*/
  modifier whenPaused() {
    require(paused);
    _;
  }

/**
* @dev called by the owner to pause, triggers stopped state
*/

  function pause() onlyOwner whenNotPaused public {
    paused = true;
    emit Pause();
  }

/**
* @dev called by the owner to unpause, returns to normal state
*/

  function unpause() onlyOwner whenPaused public {
    paused = false;
    emit Unpause();
  }
}

/**
 * @title ERC20Basic
 * @dev Simpler version of ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/179
 */

contract ERC20Basic is Pausable {
  function totalSupply() public view returns (uint256);
  function balanceOf(address who) public view returns (uint256);
  function transfer(address to, uint256 value) public returns (bool);
  event Transfer(address indexed from, address indexed to, uint256 value);
}

/**
 * @title ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/20
 */

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
/**
* @dev total number of tokens in existence
*/

  function totalSupply() public view returns (uint256) {
    return totalSupply_;
  }

/**
* @dev transfer token for a specified address
* @param _to The address to transfer to.
* @param _value The amount to be transferred.
*/

  function transfer(address _to, uint256 _value) public returns (bool) {
    require(_to != address(0));
    require(_value <= balances[msg.sender]);
    require(!frozenAccount[msg.sender]);
    require(now > frozenTimestamp[msg.sender]);
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[_to] = balances[_to].add(_value);
    emit Transfer(msg.sender, _to, _value);
    return true;
  }

/**
* @dev Gets the balance of the specified address.
* @param _owner The address to query the the balance of.
* @return An uint256 representing the amount owned by the passed address.
*/

  function balanceOf(address _owner) public view returns (uint256) {
    return balances[_owner];
  }

  /**@dev Lock account */

  function freeze(address _target,bool _freeze) public returns (bool) {
    require(msg.sender == owner);
    require(_target != address(0));
    frozenAccount[_target] = _freeze;
    return true;
  }

}

/**
 * @title Standard ERC20 token
 * @dev Implementation of the basic standard token.
 * @dev https://github.com/ethereum/EIPs/issues/20
 * @dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol
 */

contract StandardToken is ERC20, BasicToken {
  mapping (address => mapping (address => uint256)) internal allowed;
  
/**
* @dev Transfer tokens from one address to another
* @param _from address The address which you want to send tokens from
* @param _to address The address which you want to transfer to
* @param _value uint256 the amount of tokens to be transferred
*/

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
    require(_to != address(0));
    require(_value <= balances[_from]);
    require(_value <= allowed[_from][msg.sender]);
    require(!frozenAccount[_from]);
    require(!frozenAccount[_to]);
    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
    emit Transfer(_from, _to, _value);
    return true;
  }

/**
* @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
*
* Beware that changing an allowance with this method brings the risk that someone may use both the old
* and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this
* race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:
* https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
* @param _spender The address which will spend the funds.
* @param _value The amount of tokens to be spent.
*/

  function approve(address _spender, uint256 _value) public returns (bool) {
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }

/**
* @dev Function to check the amount of tokens that an owner allowed to a spender.
* @param _owner address The address which owns the funds.
* @param _spender address The address which will spend the funds.
* @return A uint256 specifying the amount of tokens still available for the spender.
*/

  function allowance(address _owner, address _spender) public view returns (uint256) {
    return allowed[_owner][_spender];
  }

/**
* @dev Increase the amount of tokens that an owner allowed to a spender.
*
* approve should be called when allowed[_spender] == 0. To increment
* allowed value is better to use this function to avoid 2 calls (and wait until
* the first transaction is mined)
* @param _spender The address which will spend the funds.
* @param _addedValue The amount of tokens to increase the allowance by.
*/

  function increaseApproval(address _spender, uint _addedValue) public returns (bool) {
    allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue);
    emit Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
    return true;
  }

/**
* @dev Decrease the amount of tokens that an owner allowed to a spender.
*
* approve should be called when allowed[_spender] == 0. To decrement
* allowed value is better to use this function to avoid 2 calls (and wait until
* the first transaction is mined)
* From MonolithDAO Token.sol
* @param _spender The address which will spend the funds.
* @param _subtractedValue The amount of tokens to decrease the allowance by.
*/

  function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool) {
    uint oldValue = allowed[msg.sender][_spender];
    if (_subtractedValue > oldValue) {
      allowed[msg.sender][_spender] = 0;
    } else {
      allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);
    }
    emit Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
    return true;
  }
}
contract user_Token is BasicToken {
    string public  name = ""; // 
    string public  symbol = ""; // 
    uint8 public constant decimals = 18; 
    uint256 public constant INITIAL_SUPPLY = 0;
    uint256 public totalSupply = 0;
    
    constructor(address tokens) public {
       /* totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
        emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);*/
    }
    
      
    function mint(address _to, uint256 _amount) onlyOwner public returns (bool) {
        totalSupply_ = totalSupply_.add(_amount);
        balances[_to] = balances[_to].add(_amount);
        emit Mint(_to, _amount);
        emit Transfer(address(0), _to, _amount);
        return true;
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
    }
    
    mapping(uint => voteModule) private voteList;
    
    event createVote( 
        address myAddress,
        address toAddress,
        string indexed content,
        uint indexed numbers
    );
    
    
    /*创建决议*/
    function addVoteList(uint _state,uint _types,address _myAddress,address _toAddress,string _content,uint _numbers) public returns(bool){
        voteList[voteLength] = voteModule(_state,_types,_myAddress,_toAddress,_content,_numbers);
        voteLength ++;
        emit createVote(_myAddress,_toAddress,_content,_numbers);
        return true;
    }
    
    function setVoteList(uint _state,uint _types,address _myAddress,address _toAddress,string _content,uint _numbers) public returns(bool){
        voteList[voteLength] = voteModule(_state,_types,_myAddress,_toAddress,_content,_numbers);
        voteLength ++;
        emit createVote(_myAddress,_toAddress,_content,_numbers);
        return true;
    }
    
    
    function() payable public {
        revert();
    }
}