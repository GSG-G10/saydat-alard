const router = require('express').Router();
const { getMainCities } = require('../controllers');

router.get('/', getMainCities);

module.exports = router;
