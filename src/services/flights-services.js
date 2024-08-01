const FlightRepository = require("../repository/flight-repository");
const AirplaneRepository = require("../repository/airplane-repository");
const {compareTime}= require('../utils/helper')
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if(!compareTime(data.arrivalTime,data.departureTime)){
        throw new Error("Arrival time should be greater than departure time");
      }
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
