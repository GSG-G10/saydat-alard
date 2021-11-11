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

router.use(asyncHandler(checkAuth), asyncHandler(isAdmin));

router
  .route('/proverb')
  .get(asyncHandler(getDashboardProverbs))
  .post(asyncHandler(addProverb))
  .patch(asyncHandler(editProvebDashboard))
  .delete(asyncHandler(deleteProvebDashboard));

router
  .route('/city')
  .get(asyncHandler(getDashboardCities))
  .post(asyncHandler(addCity));

router
  .route('/city/:id')
  .put(asyncHandler(editCityDashboard))
  .patch(asyncHandler(editCityDashboard))
  .delete(asyncHandler(deleteCityDashboard));

router.get('/story', asyncHandler(getDashboardStories));

router.patch('/story/:id', asyncHandler(approvedStory));

module.exports = router;
