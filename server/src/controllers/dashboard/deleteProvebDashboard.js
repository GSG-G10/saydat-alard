const { deleteProverbDashboardQuery } = require('../../database/queries');

const deleteProvebDashboard = async (req, res) => {
  const { proverbId } = req.params;
  try {
    const result = await deleteProverbDashboardQuery(proverbId);
    if (result.rowCount > 0) {
      res.json({ msg: 'تم الحذف بنجاح' });
    } else res.status(400).json({ msg: 'Bad request' });
  } catch (error) { res.status(500).json({ status: 500, msg: 'Server Error' }); }
};
module.exports = deleteProvebDashboard;
