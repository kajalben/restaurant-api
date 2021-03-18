const express = require('express');
const router = express.Router();

const {createRestaurent, getRestarants, getOneRestarant} = require('../controllers/restaurantController');

router.get('/', getRestarants);
router.get('/:id', getOneRestarant); 
router.post('/', createRestaurent)

module.exports = router;