const TheNervousClub = artifacts.require('./TheNervousClub');

module.exports = function(_deployer) {
  _deployer.deploy(TheNervousClub, "TheNervousClub", "TNC", "ipfs://bafybeieusiuml4ymblzu4nuejbclkmde4jjhkb4wlfgbfmitaa4ix7lh3u/");
};
