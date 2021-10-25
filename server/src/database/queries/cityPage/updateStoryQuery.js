const connection = require('../../config/connection');

const updateStoryQuery = (id, content, title, image) => connection.query('Update stories set content=$1,title=$2,image=$3,approved=FALSE  where id=$4 ', [content, title, image, id]);

module.exports = updateStoryQuery;
