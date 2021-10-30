const router = require('express').Router();

const {
  approvedStory,
  isAdmin,
  checkAuth,
  addProverb,
  getDashboardStories,
  getDashboardProverbs,
  getDashboardCities,
  editProvebDashboard,
  addCity,
  deleteProvebDashboard,
  deleteCityDashboard,
  editCityDashboard,
} = require('../controllers');

const { asyncHandler } = require('../controllers/middlewares');

router.use(checkAuth, isAdmin);

router
  .route('/proverb')
  .get(asyncHandler(getDashboardProverbs))
  .post(asyncHandler(addProverb))
  .patch(asyncHandler(editProvebDashboard))
  .delete(asyncHandler(deleteProvebDashboard));


router.get('/stories', asyncHandler(getDashboardStories));
router.get('/cities', asyncHandler(getDashboardCities));

router.post('/newcity', asyncHandler(addCity));

router.patch('/story', asyncHandler(approvedStory));

router.put('/city', asyncHandler(editCityDashboard));

router.delete('/story/:storyId', asyncHandler(deleteCityDashboard));

module.exports = router;
