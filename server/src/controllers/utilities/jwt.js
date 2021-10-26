const { verify, sign } = require('jsonwebtoken');

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET, (err, decode) => {
    if (err) {
      reject(err);
    } else {
      resolve(decode);
    }
  });
});

const signToken = ({ id, name, isAdmin }) => new Promise((resolve, reject) => {
  sign({ id, name, isAdmin }, process.env.SECRET_TOKEN, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

module.exports = {
  verifyToken,
  signToken,
};
