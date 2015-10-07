var DataStore = require('./DataStore.js');

function Model(schema) {
  this.schema = schema;
  this.id = null;

  for(var key in schema) {
      this[key] = null;
  }
    DataStore.store[this.constructor.name] = [];
}

Model.getNextId = function() {
  var counter = 0;
  for(var i = 0; i < DataStore.store[this.prototype.constructor.name].length; i++) {
    if(DataStore.store[this.prototype.constructor.name][i].id > 0) {
      counter = DataStore.store[this.prototype.constructor.name][i] + 1;
    }
  }
  return counter + 1;
};

Model.find = function(id) {
  // console.log('hello',id);
  for(var i = 0; i < DataStore.store[this.prototype.constructor.name].length; i++) {
    // console.log('testing',DataStore.store[this.prototype.constructor.name][i].id);
    if(DataStore.store[this.prototype.constructor.name][i].id === id) {
      console.log('this', DataStore.store[this.prototype.constructor.name][i]);
      return DataStore.store[this.prototype.constructor.name][i];
    }
  }
};

Model.prototype.save = function() {
  if(this.id === null) {
    this.id = this.constructor.getNextId();
    DataStore.store[this.constructor.name].push(this);
  }
};

Model.prototype.destroy = function() {
  this.find(id);
};

module.exports = Model;