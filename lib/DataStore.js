/*
*  ex. DataStore() {
*      this. store = {
*       User: [ {
*        name : string
*        location: string
*        age : Number} ]
*
*/

//Holder for all collections and documents
function DataStore(store) {
  this.store = {};
}

module.exports = new DataStore();