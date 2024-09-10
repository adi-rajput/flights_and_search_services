const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirplaneController = require('../../controllers/airplane-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const router = express.Router();

router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);
router.post('/airplane', AirplaneController.create);
router.post('/flight', FlightController.create); // Fixed the typo here
router.post('/airport', AirportController.create);

module.exports = router;
