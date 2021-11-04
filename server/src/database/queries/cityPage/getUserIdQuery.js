const connection = require('../../config/connection');

const getUserIdQuery = (storyId) => connection.query(
  'SELECT * FROM stories WHERE id=$1 ',
  [storyId],
);

module.exports = getUserIdQuery;
