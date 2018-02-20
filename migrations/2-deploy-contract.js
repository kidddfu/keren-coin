//引入我们编写的合约
const KerenCoin = artifacts.require('./contracts/KerenCoin.sol')
const KRCico = artifacts.require('./contracts/KRCico.sol')

module.exports = function(deployer, network, accounts) {
    const ifSuccessfulSendTo = accounts[0] //当前以太坊中的默认账户
    const fundingGoalInEthers = 1000
    const durationInMinutes = 360000000
    const etherCostOfEachToken = 0.01
     // 这里的 Promise 可以保证我们在发布完 token 合约之后再发布 ICO 合约，并将已发布 token 的地址作为参数传入
    deployer.deploy(GitCoin).then(function() {
    return deployer.deploy(GitCoinCrowdsale, ifSuccessfulSendTo, fundingGoalInEthers, durationInMinutes, etherCostOfEachToken, GitCoin.address);
  });
};