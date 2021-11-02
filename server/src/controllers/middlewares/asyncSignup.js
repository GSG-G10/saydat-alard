const { sign } = require('jsonwebtoken');

const asyncSign = (id, name, isAdmin) => new Promise((resolve, reject) => {
  sign({ id, name, isAdmin }, process.env.SECRET_TOKEN, (error, token) => {
    if (error) {
      reject(error);
    }
    resolve(token);
  });
});

module.exports = asyncSign;
