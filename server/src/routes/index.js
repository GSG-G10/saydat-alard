const router = require('express').Router();

const {
  getCityData,
  getMainCities,
  getProverbs,
  getFamilies,
  getCitiesNames,
} = require('../controllers');

const { asyncHandler } = require('../controllers/middlewares');

const authenticationRouter = require('./authentication');
const dashboardRouter = require('./dashboard');
const userStoryRouter = require('./userStory');

router.get('/', asyncHandler(getMainCities));
router.get('/city/:cityId', getCityData);
router.get('/search', getCitiesNames);
router.get('/families/:cityId', getFamilies);
router.get('/proverbs', getProverbs);

router.use(authenticationRouter);
router.use('/dashboard', dashboardRouter);
router.use(userStoryRouter);

module.exports = router;
