var Model = require('./Model');
var User = require('./User');

//sets a literal object
var MessageSchema = {
  from : User,
  to : User,
  message : String,
  sent : Date
};

//assigns the constructor from superclass to a new instance of Model
function Message() {
  Model.call(this, MessageSchema);
}

//extends the static and prototype methods
Model.extend(Message);

module.exports = Message;