const { AirplaneService} = require("../services/index");
const airplaneService = new AirplaneService();
const create =async (req, res) => {
    try {
        const city = await airplaneService.createAirplane(req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message:"Successfully created a model of airplane",
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to find city",
            err : error
        })
    }
};



module.exports = {
  create,
  
};
