const { deleteProverbDashboardQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const deleteProvebDashboard = async (req, res) => {
  const { id } = req.query;
  const { rowCount } = await deleteProverbDashboardQuery(id);
  if (rowCount) {
    return httpResponse.ok(res, null, 'تم الحذف بنجاح');
  } return httpResponse.badRequest(res, 'طلب خاطئ ');
};
module.exports = deleteProvebDashboard;
