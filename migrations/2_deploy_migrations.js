/* eslint-disable no-undef */
const NFTMart = artifacts.require('NFTMart')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(NFTMart, 'NFTMart NFTs', 'PFT', 10, accounts[1])
}
