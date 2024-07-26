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

    async updateCity({ cityId, data }) {
           try {
            const city = await City.update(data,{
                where:{
                    id: cityId
                }
            });
            return city;
           } catch (error) {
            console.error('Error in repository layer',);
            throw error;
           }    
        }

    async getCity(cityId){
        try {
            const city =  await City.findByPk({cityId});
            return city;
        } catch (error) {
            console.error('Error in repository layer',);
            throw error;
        }
    }
}

module.exports = CityRepository;
