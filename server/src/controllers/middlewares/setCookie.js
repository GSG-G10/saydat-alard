const { sign } = require('jsonwebtoken');

const setCookie = (req, res) => {
  const { id, name, isAdmin } = req;
  sign({ id, name, isAdmin }, process.env.SECRET_TOKEN, (error, token) => {
    if (error) {
      res.status(500).json({ message: error });
    }
    res.cookie('checkAuth', token, { httponly: true, secure: true }).status(201).json({ msg: 'success' });
  });
};
module.exports = setCookie;
