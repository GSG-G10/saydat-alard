const connection = require('../../config/connection');

const deleteStoryQuery = (storyId) => connection.query('DELETE FROM stories WHERE id=$1', [storyId]);

module.exports = deleteStoryQuery;
