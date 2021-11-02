const connection = require('../../config/connection');

const updateStoryQuery = (storyId, content, title, image) => connection.query('Update stories set content=$2,title=$3,image=$4,approved=FALSE  where id=$1 ', [storyId, content, title, image]);

module.exports = updateStoryQuery;
