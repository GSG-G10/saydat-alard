const router = require('express').Router();
const {
  checkUserExist,
  setCookie,
  getMainCities,
  signup,
  approvedStory,
  isAdmin,
  checkAuth,
  getDashboardCities,
} = require('../controllers');

router.get('/', getMainCities);
router.get('/dashboard/cities', checkAuth, isAdmin, getDashboardCities); // route => /dashboard/cities?page=1

router.post('/signup', checkUserExist, signup, setCookie);

router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory);

module.exports = router;
