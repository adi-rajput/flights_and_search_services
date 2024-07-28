const CityRepository = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) { 
    try {
      const result = await this.cityRepository.createCity(data);
      return result;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      console.log(`Service layer - deleting city with ID: ${cityId}`);  // Log the city ID
      const result = await this.cityRepository.deleteCity({ cityId });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

  async getAllCities(){
    try {
      const cities = await this.cityRepository.getAllCities();
      return cities;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }
}

module.exports = CityService;
