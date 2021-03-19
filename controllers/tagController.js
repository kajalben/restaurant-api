const Tag = require("../models/Tag");

const getTags = async(req, res, next) =>{
    try {
        const getTag = await Tag.find({});
        res.json(getTag);
    } catch (e) {
        res.status(500).send(e.message);
    }
}

const getOneTag = async (req,res, next) => {
const { id } = req.params;
try{
    const targetTag = await Tag.findById({ _id: id});
    if (!targetTag) return res.status(404).send('No such Tag')
    res.json(targetTag);
} catch(e) {
    res.status(500).send(e.message);
}
}

const createTag = async(req, res, next) =>{
    const { name } = req.body;
    try {
        const newTag =await Tag.create({name})
        res.send(newTag);
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const getRestaurantsByTag = async (req, res, next) => {
    const { name } = req.params;
    try {
      const targetCity = await Tag.find({ name: { $regex: '.*' + name + '.*', $options: 'i' }  }).populate("restaurants");
      if (!targetCity) return res.status(404).send("No such restaurants");
      res.json(targetCity);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  



module.exports = {
    getTags,
    getOneTag,
    createTag,
    getRestaurantsByTag
}