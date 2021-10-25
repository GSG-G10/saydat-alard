const { getMainCities } = require('./main');
const { signup } = require('./Auth');
<<<<<<< HEAD
const { checkUserExist, setCookie } = require('./middlewares');
=======
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');
>>>>>>> b9b0cfe86021c85a9ef54adb0aed9ed5d7b9bde2

module.exports = {
  getMainCities,
  signup,
  checkUserExist,
  setCookie,
<<<<<<< HEAD
=======
  isAdmin,
  checkAuth,
>>>>>>> b9b0cfe86021c85a9ef54adb0aed9ed5d7b9bde2
};
