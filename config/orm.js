// Import MySQL connection
const connection = require("../config/connection.js");

// Object for all SQL statement functions
const orm = {
  selectAll: function (tableName, cb) {
    const queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (tableName, colName, val, cb) {
    const queryString = `INSERT INTO ${tableName} (${colName}) VALUES ("${val}")`;
    console.loge(queryString)
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err
      };
      cb(result);
    });
  },
  updateOne: function (tableName, colName, boolean, condition, cb) {
    const queryString = `UPDATE ${tableName} SET ${colName} = ${boolean} WHERE ${condition}`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err
      };
      cb(result);
    });
  },
  deleteOne: function (tableName, condition, cb) {
    const queryString = `DELETE FROM ${tableName} WHERE ${condition}`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err
      };
      cb(result);
    });
  }
};

// Export the orm object for the model (burgers.js)
module.exports = orm;