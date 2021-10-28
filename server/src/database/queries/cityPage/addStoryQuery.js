const connection = require('../../config/connection');

const addStoryQuery = (content, title, image, user_id, city_id) => connection.query('INSERT INTO stories (content, title, image, user_id, city_id) values ($1, $2, $3, $4 ,$5)', [content, title, image, user_id, city_id]);

module.exports = addStoryQuery;
