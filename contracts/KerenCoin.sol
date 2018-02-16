// 声明 solidity 编译版本
pragma solidity ^0.4.18;
// 导入 zeppelin-solidity 的ERC20 Token
import '../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
// 通过 is 关键字继承 StandardToken
contract GitToken is StandardToken {

  string public name = "KerenCoin"; // 名称
  string public symbol = "KRC"; // Token 标识 
  uint public decimals = 18; // 计量单位， ETH 保持一样为 18
  uint public INITIAL_SUPPLY = 6666666 * (10 ** decimals); // 初始供应量

  // 与 contract 同名的函数为本 contract 的构造方法，类似于 JavaScript 当中的 constructor
  function GitToken() {
    totalSupply = INITIAL_SUPPLY; // 设置初始供应量
    balances[msg.sender] = INITIAL_SUPPLY; // 将所有初始 token 都存入 contract 创建者的余额
  }
}