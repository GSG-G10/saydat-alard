const { deleteCityDashboardQuery } = require('../../database/queries');

const deleteCityDashboard = async (req, res) => {
  const { cityId } = req.params;
  try {
    await deleteCityDashboardQuery(cityId);
    res.json({ msg: 'تم الحذف بنجاح' });
  } catch (error) { res.status(500).json({ status: 500, msg: 'Server Error' }); }
};
module.exports = deleteCityDashboard;
