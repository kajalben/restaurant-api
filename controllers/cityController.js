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

const getRestaurantsByCity = async (req, res, next) => {
  const { id } = req.params;
  try {
    const targetCity = await City.findById({ _id: id }).populate("restaurants");
    if (!targetCity) return res.status(404).send("No such City");
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

module.exports = {
  getCities,
  createCity,
  getOneCity,
  getRestaurantsByCity,
};
