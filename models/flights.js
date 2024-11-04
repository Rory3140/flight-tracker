let flights = [];

class Flights {
  constructor(flightNumber, source, destination, departureDate) {
    this.flightNumber = flightNumber;
    this.source = source;
    this.destination = destination;
    this.departureDate = departureDate;
  }

  static getAllFlights() {
    return flights;
  }

  static addFlight(flightData) {
    const { flightNumber, source, destination, departureDate } = flightData;
    const newFlight = new Flights(
      flightNumber,
      source,
      destination,
      departureDate
    );
    flights.push(newFlight);
  }
}

module.exports = Flights;
