const connection = require('../../config/connection');

const getUserIdQuery = (storyId) => connection.query(
  'SELECT user_id FROM stories WHERE id=$1 ',
  [storyId],
);

module.exports = getUserIdQuery;
