const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup, getProverbs,
} = require('../controllers');

router.get('/', getMainCities);
router.get('/proverbs', getProverbs);
router.post('/signup', checkUserExist, signup, setCookie);
module.exports = router;
