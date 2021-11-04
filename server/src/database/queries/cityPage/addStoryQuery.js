const connection = require('../../config/connection');

const addStoryQuery = (content, title, image, cityId, id) => connection.query('INSERT INTO stories (content, title, image, city_id, user_id) VALUES ($1, $2, $3, $4 ,$5) returning *', [content, title, image, cityId, id]);

module.exports = addStoryQuery;
