const express = require('express');
const router = express.Router();

const { getTags, getOneTag, createTag} = require('../controllers/tagController');

router.get('/', getTags);
router.get('/:id', getOneTag);
router.post('/', createTag);


module.exports = router;