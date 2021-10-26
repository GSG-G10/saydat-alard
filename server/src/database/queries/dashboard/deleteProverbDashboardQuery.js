const connection = require('../../config/connection');

const deleteProverbDashboardQuery = (proverbId) => connection.query('DELETE FROM proverbs WHERE id=$1', [proverbId]);

module.exports = deleteProverbDashboardQuery;
