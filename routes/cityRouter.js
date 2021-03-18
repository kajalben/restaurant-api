const express = require('express');
const router = express.Router();

const {getCities, createCity} = require('../controllers/cityController');

/* GET home page. */
router.get('/', getCities);
router.post('/', createCity);


module.exports = router;