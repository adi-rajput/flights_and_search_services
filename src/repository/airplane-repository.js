const { Airplane } = require('../models/index');

class AirplaneRepository {
  async createAirplane({ modelNumber, capacity }) {
    try {
      const airplane = await Airplane.create({ modelNumber, capacity });
      return airplane;
    } catch (error) {
      console.error('Error in repository layer:', error);
      throw error;  // Throw the original error without wrapping it in an object
    }
  }
  async getAirplane(id) {
        try {
          const airplane = await Airplane.findByPk(id);
          return airplane;
        } catch (error) {
          console.log("Error in repository layer:", error.message);
          throw error;
        }
      }
    }


module.exports = AirplaneRepository;
