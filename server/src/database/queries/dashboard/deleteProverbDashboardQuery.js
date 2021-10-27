const connection = require('../../config/connection');

const deleteProverbDashboardQuery = (proverbId) => connection.query('DELETE FROM proverbs WHERE id=$1 RETURNING ID', [proverbId]);

module.exports = deleteProverbDashboardQuery;
