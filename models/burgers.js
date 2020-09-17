// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (val, cb) {
    orm.insertOne("burgers", "burger_name", val, function (res) {
      cb(res);
    });
  },
  updateOne: function (boolean, condition, cb) {
    orm.updateOne("burgers", "devoured", boolean, condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
