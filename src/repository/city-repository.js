const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error('Error in createCity:', error);
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
            console.error('Error in deleteCity:', error);
            throw error;  // Throw the original error without wrapping it in an object
        }
    }
}

module.exports = CityRepository;
