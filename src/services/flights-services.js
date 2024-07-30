const FlightRepository = require("../repository/flight-repository");
const AirplaneRepository = require("../repository/airplane-repository");
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      const result = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return result;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }
}
module.exports = FlightService;
