const router = require('express').Router();
  checkUserExist, setCookie, getMainCities, signup, approvedStory, isAdmin, checkAuth,getProverbs,
} = require('../controllers');


router.get('/', getMainCities);
router.get('/proverbs', getProverbs);
router.get('/', getMainCities);
router.post('/signup', checkUserExist, signup, setCookie);
router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory);
module.exports = router;
