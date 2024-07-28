const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error('Error in repository layer',);
            throw error;  // Throw the original error without wrapping it in an object
        }
    }

    async deleteCity({ cityId }) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.error('Error in repository layer',);
            throw error;  // Throw the original error without wrapping it in an object
        }
    }

    async updateCity(cityId, { name }) {
        try {
          const city = await City.update(
            { name },
            {
              where: {
                id: cityId,
              },
            }
          );
          // const city = await City.findByPk(cityid);
          // city.name = data.name;
          // await city.save();
          return city;
        } catch (error) {
          console.log("something went wrong in the repo");
          throw { error };
        }
      }

    async getCity(cityId){
        try {
            const city =  await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.error('Error in repository layer',);
            throw error;
        }
    }

    async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.error('Error in repository layer',);
            throw error;
        }
    }
}

module.exports = CityRepository;
