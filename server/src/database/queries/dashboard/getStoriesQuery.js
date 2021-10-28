const connection = require('../../config/connection');

const getStoriesQuery = (page = 1) => connection.query('SELECT * FROM stories WHERE approved=FALSE ORDER BY stories.id DESC LIMIT 5 OFFSET ($1 - 1) * 5', [page]);
module.exports = getStoriesQuery;
