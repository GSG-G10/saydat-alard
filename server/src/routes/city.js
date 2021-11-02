const router = require('express').Router();

const {
  getCityData,
  getMainCities,
  getProverbs,
  getFamilies,
  getCitiesNames,
} = require('../controllers');

const { asyncHandler } = require('../controllers/middlewares');

router.get('/', asyncHandler(getMainCities));
router.get('/city/:cityId', asyncHandler(getCityData));
router.get('/search', asyncHandler(getCitiesNames));
router.get('/families/:cityId', getFamilies);
router.get('/proverbs', getProverbs);

module.exports = router;
