const router = require('express').Router();

const {
  getCityData,
  getMainCities,
  checkAuth,
  getProverbs,
  updateStory,
  getFamilies,
  getCitiesNames,
  deleteStory,
  uploadStory,
} = require('../controllers');

const { asyncHandler } = require('../controllers/middlewares');
const authentication = require('./authentication');
const dashboard = require('./dashboard');

router.use(authentication);
router.use(dashboard);

router.get('/', asyncHandler(getMainCities));
router.get('/city/:cityId', getCityData);
router.get('/families/:cityId', getFamilies); // route => /families/:cityId?letter=...
router.get('/search', getCitiesNames); //  route =>  /search?city=...
router.get('/proverbs', getProverbs); // /proverbs?char=...&page=1'
router.post('/story', checkAuth, uploadStory);
router.put('/story/:storyId ', checkAuth, updateStory);
router.delete('/story/:storyId', checkAuth, deleteStory);

module.exports = router;
