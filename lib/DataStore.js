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
function DataStore() {
  this.store = {};
}

module.exports = new DataStore();