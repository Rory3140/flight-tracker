// --
// routes/flight.js
// --

var express = require("express");
var router = express.Router();
var flightController = require("../controllers/flightController");

router.get("/add", flightController.addFlightForm);
router.post("/add", flightController.addFlight);
router.get("/", flightController.listFlights);

module.exports = router;
