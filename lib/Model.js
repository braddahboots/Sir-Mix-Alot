var DataStore = require('./DataStore.js');

//multiple instances of this model will be created
function Model(schema) {
  this.schema = schema;
  this.id = null;

  for(var key in schema) {
      this[key] = null;
  }
  if (!DataStore.store.hasOwnProperty(this.constructor.name)) {
    DataStore.store[this.constructor.name] = [];
  }
}

//Static method - Grabs the next id and returns the id + 1
Model.getNextId = function() {
  return DataStore.store[this.name].length + 1;
};

//Static method - Passes in an id and searchs for it within the object
Model.find = function(id) {
  for(var i = 0; i < DataStore.store[this.name].length; i++) {
    if(DataStore.store[this.name][i].id === id) {
      return DataStore.store[this.name][i];
    }
  }
  return null;
};

//State method - Passes in a klass
//Extends both static and prototype methods of Model onto a subclass
Model.extend = function(klass) {
  for(var i in this) {
    klass[i] = this[i];
    // console.log(klass[i]);
  }
  for(var j in this.prototype) {
    klass.prototype[j] = this.prototype[j];
    // console.log(klass.prototype[j]);
  }
};

//Method that is applied to an instance of Model
//Saves the document to datastore
Model.prototype.save = function() {
  if(this.id === null) {
    this.id = this.constructor.getNextId();
    DataStore.store[this.constructor.name].push(this);
  }
};

//Method that is applied to an instance of Model
//Removes a document from the database
Model.prototype.destroy = function() {
  var doc = DataStore.store[this.constructor.name];
  if(this.id !== null) {
    var obj = this.constructor.find(this.id);
    var id = doc.indexOf(obj);
    // console.log(db.indexOf(obj));
    doc.splice(id, 1);
  }
};

module.exports = Model;