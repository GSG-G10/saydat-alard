const { deleteCityDashboardQuery } = require('../../database/queries');

const deleteCityDashboard = async (req, res) => {
  const { cityId } = req.params;
  try {
    const result = await deleteCityDashboardQuery(cityId);
    if (result.rowCount > 0) {
      res.json({ msg: 'تم الحذف بنجاح' });
    } else res.status(400).json({ msg: 'Bad request' });
  } catch (error) { res.status(500).json({ msg: 'Server Error' }); }
};
module.exports = deleteCityDashboard;
