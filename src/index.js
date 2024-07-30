const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes =  require('./routes/index')
const {City , Airport,Flights} =  require('./models/index')
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api',ApiRoutes)
  const PORT = 3000;
  app.listen(PORT,async () => {
    console.log(`Server is running on ${PORT}`);
    // const city =  await City.findOne({
    //   where:{
    //     id:12
    //   }
    // }); 
    // const airports =  await city.getAirports();
    //console.log(city,airports)
    // const newAirport =  await Airport.create({
    //   name:'Jindal Vijaynagar Airport',
    //   cityId:12
    //})
    // const newCity =  await City.create({
    //   name:'Etawah',
    // })
    // const newFlight = await Flights.create({
    //   flightNumber:"UK 207" ,
    //   airplaneId: 8,
    //   departureAirportId:  1,
    //   arrivalAirportId: 4,
    //   arrivalTime: "2024-04-13T08:30:00Z" ,
    //   departureTime: "2024-04-12T08:30:00Z",
    //   boardingGate: 3,
    //   totalSeats: 200,
    // })
    
    
  });
};

setupAndStartServer();
