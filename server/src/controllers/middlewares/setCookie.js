const { sign } = require('jsonwebtoken');
const { httpResponse } = require('../../helpers');

const asyncSign = (id, name, isAdmin) => new Promise((resolve, reject) => {
  sign({ id, name, isAdmin }, process.env.SECRET_TOKEN, (error, token) => {
    if (error) {
      reject(error);
    }
    resolve(token);
  });
});
const setCookie = async (req, res) => {
  const { id, name, isAdmin } = req;
  const token = await asyncSign(id, name, isAdmin);

  res.cookie('token', token, { httponly: true, secure: true });
  return httpResponse.created(res, { id, name, isAdmin }, 'success');
};
module.exports = setCookie;
