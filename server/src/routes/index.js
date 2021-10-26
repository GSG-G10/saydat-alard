const router = require('express').Router();
const { getCityData } = require('../controllers');

router.get('/', (req, res) => {
  res.json({ msg: 'hello' });
});

router.get('/city/:cityId', getCityData);
module.exports = router;
