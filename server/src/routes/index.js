const router = require('express').Router();
const { signup } = require('../controllers/Auth');
const { checkUserExist, setCookie } = require('../controllers/middlewares');

router.get('/', (req, res) => {
  res.json({ msg: 'hello' });
});
router.post('/signup', checkUserExist, signup, setCookie);
module.exports = router;
