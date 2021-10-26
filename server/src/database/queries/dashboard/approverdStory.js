const connection = require('../../config/connection');

const approvePendingStory = (storyId) => connection.query(
  'UPDATE stories SET approved=TRUE WHERE id=$1 RETURNING *', [storyId],
);

module.exports = approvePendingStory;
