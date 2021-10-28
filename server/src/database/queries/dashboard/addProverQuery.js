const connection = require('../../config/connection');

const addProverQuery = (content) => connection.query(
  'INSERT INTO proverbs(content) VALUES($1)', [content],
);

module.exports = addProverQuery;
