var randomNumber = require('./generateRandomNumber.js');
var convertToDollars = require('./convertToDollars.js');

var balance = function(){
  return (convertToDollars(randomNumber(100, 1000000).toString()));
};

var balanceString = function(){
  return 'Account Balance: \n'
}

module.exports = balance;
module.exports.balance = balanceString;
