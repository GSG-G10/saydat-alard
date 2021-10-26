const connection = require('../../config/connection');

const addStoryQuery = (content, title, image) => connection.query('insert into stories (content, title, image) values ($1,$2, $3)', [content, title, image]);

module.exports = addStoryQuery;
