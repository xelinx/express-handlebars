var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//post burger
router.post("/api/burger", function(req, res) {
  burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//update burger to devoured
router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
  //delete devoured burger
  router.delete("/api/burgers/:id", function (req, res) {
    const condition = `id = ${req.params.id}`;
  
    burger.deleteOne(condition, function (result) {
      if (result.affectedRows === 0) {
        //if no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(202).end();
    });
});

// Export routes for server.js to use.
module.exports = router;
