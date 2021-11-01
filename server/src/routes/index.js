const router = require('express').Router();

<<<<<<< HEAD
const cityRouter = require('./city');
const authenticationRouter = require('./authentication');
const dashboardRouter = require('./dashboard');
const userStoryRouter = require('./userStory');

router.use(cityRouter);
router.use(authenticationRouter);
router.use('/dashboard', dashboardRouter);
router.use(userStoryRouter);
=======
const {
  checkUserExist,
  setCookie,
  getCityData,
  getMainCities,
  signup,
  approvedStory,
  isAdmin,
  checkAuth,
  getProverbs,
  addProverb,
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
  userInfo,
} = require('../controllers');
const { asyncHandler } = require('../controllers/middlewares');

router.get('/', getMainCities);
router.get('/city/:cityId', getCityData);
router.get('/families/:cityId', getFamilies); // route => /families/:cityId?letter=...
router.get('/search', getCitiesNames); //  route =>  /search?city=...
router.get('/proverbs', getProverbs); // /proverbs?char=...&page=1'
router.get('/dashboard/proverbs', checkAuth, isAdmin, getDashboardProverbs); // '/dashboard/proverbs?char=...&page=1';
router.get('/dashboard/stories', checkAuth, isAdmin, getDashboardStories); // /dashboard/stories?page=1
router.get('/dashboard/cities', checkAuth, isAdmin, getDashboardCities); // route => /dashboard/cities?page=1
router.get('/logout', logout);
router.get('/userInfo', checkAuth, userInfo);

router.post('/signup', asyncHandler(checkUserExist), asyncHandler(signup), asyncHandler(setCookie));
router.post('/login', login);
router.post('/dashboard/proverb', checkAuth, isAdmin, addProverb);
router.post('/dashboard/newcity', checkAuth, isAdmin, addCity); // route => by body send all data about new city
router.post('/story', checkAuth, uploadStory);

router.patch('/dashboard/proverb', checkAuth, isAdmin, editProvebDashboard); // /dashboard/proverb?id=
router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory); // /dashboard/story?id=

router.put('/story/:storyId ', checkAuth, updateStory);
router.put('/dashboard/city', checkAuth, isAdmin, editCityDashboard);

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
>>>>>>> b0e98093cb1ef3a9d21bb9deb2a1d11367216268

module.exports = router;
