var Model = require('./Model');

//sets a literal object
var LocationSchema = {
  lng : Number,
  lat : Number
};

//assigns the contstructor from our super call to a new instance
function Location() {
  Model.call(this, LocationSchema);
}

//extends the static and prototype methods
Model.extend(Location);

module.exports = Location;