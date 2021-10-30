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

router.use(checkAuth)
  .use(isAdmin);

router.get('/dashboard/proverbs', asyncHandler(getDashboardProverbs))
  .get('/dashboard/stories', asyncHandler(getDashboardStories))
  .get('/dashboard/cities', asyncHandler(getDashboardCities));

router.post('/dashboard/proverb', asyncHandler(addProverb))
  .post('/dashboard/newcity', asyncHandler(addCity));

router.patch('/dashboard/proverb', asyncHandler(editProvebDashboard))
  .patch('/dashboard/story', asyncHandler(approvedStory));

router.put('/dashboard/city', asyncHandler(editCityDashboard));

router.delete('/dashboard/proverb/:proverbId', asyncHandler(deleteProvebDashboard))
  .delete('/dashboard/story/:storyId', asyncHandler(deleteCityDashboard));

module.exports = router;
