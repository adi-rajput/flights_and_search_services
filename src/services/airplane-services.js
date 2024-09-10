const AirplaneRepository = require("../repository/airplane-repository");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(data) { 
    try {
      const result = await this.airplaneRepository.createAirplane(data);
      return result;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

}

module.exports = AirplaneService;
