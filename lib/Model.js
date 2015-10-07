var DataStore = require('./DataStore.js');

//multiple instances of this model will be created
function Model(schema) {
  this.schema = schema;
  this.id = null;

  for(var key in schema) {
      this[key] = null;
  }
    DataStore.store[this.constructor.name] = DataStore.store[this.constructor.name] || [];
}

//Static method - Grabs the next id and returns the id + 1
Model.getNextId = function() {
  // var max;
  // var instance = DataStore.store[this.name].length;
  // var db = DataStore.store[this.name];

  // for(var i = 0; i < instance; i++) {
  //   if(db[i].id > max) {
  //     max = data[i].id;
  //   }
  // }
  // return max + 1;
  return DataStore.store[this.name].length + 1;
};

//Static method - Passes in an id and searchs for it within the object
Model.find = function(id) {
  for(var i = 0; i < DataStore.store[this.name].length; i++) {
    if(DataStore.store[this.name][i].id === id) {
      console.log('this', DataStore.store[this.name][i]);
      return DataStore.store[this.name][i];
    }
  }
};

Model.extend = function(klass) {

}

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
  this.find(id);
};

module.exports = Model;