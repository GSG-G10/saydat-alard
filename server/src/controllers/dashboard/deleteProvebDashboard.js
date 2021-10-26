const { deleteProverbDashboardQuery } = require('../../database/queries');

const deleteProvebDashboard = async (req, res) => {
  const { proverbId } = req.params;
  try {
    await deleteProverbDashboardQuery(proverbId);
    res.json({ msg: 'تم الحذف بنجاح' });
  } catch (error) { res.status(500).json({ status: 500, msg: 'Server Error' }); }
};
module.exports = deleteProvebDashboard;
