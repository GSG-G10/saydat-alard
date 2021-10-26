const connection = require('../../config/connection');

const editProverbQuery = (id, content) => connection.query(
  'UPDATE proverbs SET content=$1 WHERE id=$2 ', [content, id],
);

module.exports = editProverbQuery;
