const FlightRepository = require("../repository/flight-repository");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      const result = await this.flightRepository.createFlight(data);
      return result;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }
}
module.exports = FlightService;
