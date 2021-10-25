const router = require('express').Router();

const { approvedStory } = require('../controllers/dashboard');

router.get('/', (req, res) => {
  res.json({ msg: 'hello' });
});

router.patch('/dashboard/story', approvedStory);

module.exports = router;
