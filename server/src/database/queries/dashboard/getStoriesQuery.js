const connection = require('../../config/connection');

const getStoriesQuery = () => connection.query('select * from stories where approved=False');
module.exports = getStoriesQuery;
