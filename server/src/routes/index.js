const router = require('express').Router();

const cityRouter = require('./city');
const authenticationRouter = require('./authentication');
const dashboardRouter = require('./dashboard');
const userStoryRouter = require('./userStory');

router.use(cityRouter);
router.use(authenticationRouter);
router.use('/dashboard', dashboardRouter);
router.use(userStoryRouter);

module.exports = router;
