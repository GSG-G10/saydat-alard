const { deleteCityDashboardQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const deleteCityDashboard = async (req, res) => {
  const { cityId } = req.params;

  const { rowCount } = await deleteCityDashboardQuery(cityId);
  if (rowCount) return httpResponse.ok(res, null, 'تم الحذف بنجاح');
  return httpResponse.badRequest(res, 'طلب خاطئ ');
};
module.exports = deleteCityDashboard;
