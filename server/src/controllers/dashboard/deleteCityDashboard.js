const { deleteCityDashboardQuery } = require('../../database/queries');
const { httpResponse, boomHandler } = require('../../helpers');

const deleteCityDashboard = async (req, res) => {
  const { id } = req.params;

  const { rowCount } = await deleteCityDashboardQuery(id);
  if (rowCount) return httpResponse.ok(res, null, 'تم الحذف بنجاح');
  boomHandler.notFound('لا توجد هذه المدينة');
};
module.exports = deleteCityDashboard;
