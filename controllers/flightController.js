// -----------------------------------------------
// controllers/flightController.js
// -----------------------------------------------

const Flights = require('../models/flights');

exports.addFlightForm = (req, res) => {
    res.render('addFlight');
};

exports.addFlight = (req, res) => {
    Flights.addFlight(req.body);
    res.redirect('/flights');
};

exports.listFlights = (req, res) => {
    let flights = Flights.getAllFlights();
    res.render('index', { flights });
};
