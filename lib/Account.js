var Model = require('./Model');
var User = require('./User');

//sets a literal object
var AccountSchema = {
  user : User,
  accountNumber : Number,
  address : String,
  balance : Number
};

//assigns the constructor from our superclass to a new instance of Model
function Account() {
  Model.call(this, AccountSchema);
}

//extends the static and prototype methods
Model.extend(Account);

module.exports = Account;
