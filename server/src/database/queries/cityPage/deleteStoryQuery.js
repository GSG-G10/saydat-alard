const connection = require('../../config/connection');

const deleteStoryQuery = (storyId) => connection.query('DELETE FROM stories WHERE id=$1 RETURNING id', [storyId]);

module.exports = deleteStoryQuery;
