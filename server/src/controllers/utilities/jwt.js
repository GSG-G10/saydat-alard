const { verify } = require('jsonwebtoken');

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET, (err, decode) => {
    if (err) {
      reject(err);
    } else {
      resolve(decode);
    }
  });
});

module.exports = verifyToken;
