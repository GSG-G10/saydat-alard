const connection = require('../../config/connection');

const deleteCityDashboardQuery = (cityId) => connection.query('DELETE FROM cities WHERE id=$1', [cityId]);

module.exports = deleteCityDashboardQuery;
