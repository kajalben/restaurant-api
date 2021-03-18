const express = require('express');
const router = express.Router();

const {getCities, createCity, getOneCity, getRestaurantsByCity} = require('../controllers/cityController');

router.get('/', getCities);
router.get('/:id', getOneCity);
router.get('/restaurants/:name', getRestaurantsByCity);
router.post('/', createCity);


module.exports = router;