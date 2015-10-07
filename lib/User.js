var Model = require('./Model');

//sets a literal object
var UserSchema = {
  username : String,
  password : String
};

function User(obj) {
  Model.call(this, UserSchema);
}

Model.extend(User);


module.exports = User;