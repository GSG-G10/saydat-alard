const connection = require('../../config/connection');

const deleteCityDashboardQuery = (cityId) => connection.query('DELETE FROM cities WHERE id=$1 RETURNING id', [cityId]);

module.exports = deleteCityDashboardQuery;
