const Restaurant = require("../models/Restaurant");

const getRestarants = async(req, res, next) =>{
    try {
        const getRestarant = await Restaurant.find({}).populate('city');
        res.json(getRestarant);
        res.status(500).send(e.message);
      }
      catch(e){
        res.status(500).send(e.message);
    }
}

const getOneRestarant = async(req, res, next) =>{
    const { id } = req.params;
     try{
        const targetRestaurant = await Restaurant.findById({_id : id}).populate('city');
        if (!targetRestaurant) return res.status(404).send('No such Restaturent')
        res.json(targetRestaurant);
     }
     catch(e){
        res.status(500).send(e.message);
    }
}



const createRestaurent = async(req,res,next) =>{
    const { name, image, description, city  } = req.body
    try{
        const createRestaurent = await Restaurant.create({name, image, description, city})
        res.json(createRestaurent)
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

module.exports = {
    getRestarants,
    createRestaurent,
    getOneRestarant
}