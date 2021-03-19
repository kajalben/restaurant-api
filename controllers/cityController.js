const City = require("../models/City");

const getCities = async (req, res, next) => {
  try {
    const getCity = await City.find({});
    res.json(getCity);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const getOneCity = async (req, res, next) => {
  const { id } = req.params;
  try {
    const targetCity = await City.findById({ _id: id });
    if (!targetCity) return res.status(404).send("No such City");
    res.json(targetCity);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toUpperCase() : word.toLowerCase();
  }).replace(/\s+/g, '');
}

const getRestaurantsByCity = async (req, res, next) => {
  const { name } = req.params;
  const sanitizeName = camelize(name)
  try {
    const targetCity = await City.find({ name: sanitizeName }).populate("restaurants");
    if (!targetCity) return res.status(404).send("No such restaurants");
    res.json(targetCity);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const createCity = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newCity = await City.create({ name });
    res.send(newCity);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
const addRestaurantInCity = async(req, res, next) =>{
      const {obj_id} = req.body;
      const { id} = req.params;
      try{
        const getCity = await City.findByIdAndUpdate(id, { $push :{ restaurants : obj_id}})
        res.json(getCity);
      }
      catch(e) {
        res.status(500).send(e.message);
      }

}

module.exports = {
  getCities,
  createCity,
  getOneCity,
  getRestaurantsByCity,
  addRestaurantInCity
};
