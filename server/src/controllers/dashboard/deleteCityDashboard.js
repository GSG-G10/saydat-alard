const { deleteCityDashboardQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const deleteCityDashboard = async (req, res) => {
  const { id } = req.params;

  const { rowCount } = await deleteCityDashboardQuery(id);
  if (rowCount) return httpResponse.ok(res, null, 'تم الحذف بنجاح');
  return httpResponse.badRequest(res, 'طلب خاطئ ');
};
module.exports = deleteCityDashboard;
