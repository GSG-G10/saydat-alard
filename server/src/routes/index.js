const router = require('express').Router();

const {
  checkUserExist,
  setCookie,
  getMainCities,
  signup,
  approvedStory,
  isAdmin,
  checkAuth,
  getProverbs,
  addProverb,
  getCityData,
  getDashboardStories,
  updateStory,
  getDashboardProverbs,
  getDashboardCities,
  getFamilies,
  getCitiesNames,
  editProvebDashboard,
  login,
  addCity,
  deleteStory,
  uploadStory,
  deleteProvebDashboard,
  deleteCityDashboard,
  editCityDashboard,
  logout,

} = require('../controllers');

router.get('/city/:cityId', getCityData);
router.get('/', getMainCities);
router.get('/families/:cityId', getFamilies); // route => /families/:cityId?letter=...
router.get('/search', getCitiesNames); //  route =>  /search?city=...
router.get('/proverbs', getProverbs); // /proverbs?char=...&page=1'
router.get('/dashboard/proverbs', checkAuth, isAdmin, getDashboardProverbs); // '/dashboard/proverbs?char=...&page=1';
router.get('/dashboard/stories', checkAuth, isAdmin, getDashboardStories); // /dashboard/stories?page=1
router.get('/dashboard/cities', checkAuth, isAdmin, getDashboardCities); // route => /dashboard/cities?page=1
router.get('/logout', logout);

router.post('/signup', checkUserExist, signup, setCookie);
router.post('/login', login);
router.post('/dashboard/proverb', checkAuth, isAdmin, addProverb);
router.post('/dashboard/newcity', checkAuth, isAdmin, addCity); // route => by body send all data about new city
router.post('/story', checkAuth, uploadStory);

router.patch('/dashboard/proverb', checkAuth, isAdmin, editProvebDashboard); // /dashboard/proverb?id=
router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory); // /dashboard/story?id=

router.put('/story/:storyId ', checkAuth, updateStory);
router.put('/dashboard/city', editCityDashboard);

router.delete('/story/:storyId', checkAuth, deleteStory);
router.delete(
  '/dashboard/proverb/:proverbId',
  checkAuth,
  isAdmin,
  deleteProvebDashboard,
);
router.delete(
  '/dashboard/story/:storyId',
  checkAuth,
  isAdmin,
  deleteCityDashboard,
);

module.exports = router;
