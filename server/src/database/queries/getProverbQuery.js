const connection = require('../config/connection');

const getProverbQuery = (letter) => {
  const chars = `${letter}%`;
  return connection.query('SELECT * from proverbs where content LIKE $1', [chars]);
};

module.exports = getProverbQuery;
