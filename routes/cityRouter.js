const express = require('express');
const router = express.Router();

const {getCities, createCity, getOneCity} = require('../controllers/cityController');

router.get('/', getCities);
router.get('/:id', getOneCity);
router.post('/', createCity);


module.exports = router;