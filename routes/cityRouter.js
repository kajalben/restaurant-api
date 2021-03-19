const express = require('express');
const router = express.Router();

const {getCities, createCity, getOneCity, getRestaurantsByCity, addRestaurantInCity} = require('../controllers/cityController');

router.get('/', getCities);
router.get('/:id', getOneCity);
router.get('/restaurants/:name', getRestaurantsByCity);
router.post('/', createCity);
router.put('/:id', addRestaurantInCity);


module.exports = router;