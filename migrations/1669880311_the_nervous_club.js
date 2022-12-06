const TheNervousClub = artifacts.require('./TheNervousClub');

module.exports = function(_deployer) {
  _deployer.deploy(TheNervousClub, "TheNervousClub", "TNC", "https://thenervousclub.sacha-cohen.fr/metadata/");
};
