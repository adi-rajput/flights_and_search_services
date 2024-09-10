const { Flights } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.error("Error in repository layer");
      throw error;
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk({ where: { id: flightId } });
      return flight;
    } catch (error) {
      console.error("Error in repository layer");
      throw error;
    }
  }
  // async getAllFlights(filter) {
  //   try {
  //     const flights = await this 
  //   } catch (error) {}
  // }
}
module.exports = FlightRepository;
