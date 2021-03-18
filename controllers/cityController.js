const City = require("../models/City");

const getCities = async(req, res, next) =>{
    try {
        const getCity = await City.find({});
        res.json(getCity);
      } catch (e) {
        res.status(500).send(e.message);
      }
    
}

const createCity = async(req, res, next) =>{
    const { name } = req.body;
    try {
        const newCity =await City.create({ name})
        res.send(newCity);
      } catch (e) {
        res.status(500).send(e.message)
      }
    
}



module.exports = {
    getCities,
    createCity
}