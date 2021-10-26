const connection = require('../../config/connection');

const getDashboardProverbsQuery = () => connection.query();

module.exports = getDashboardProverbsQuery;
