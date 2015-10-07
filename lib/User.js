var Model = require('./Model');

//sets a literal object
var UserSchema = {
  username : String,
  password : String
};

//assigns the constructor from our superclass to a new instance of Model
function User() {
  Model.call(this, UserSchema);
}

//extends the static and prototype methods
Model.extend(User);


module.exports = User;