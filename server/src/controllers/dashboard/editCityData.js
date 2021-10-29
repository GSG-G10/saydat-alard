const {
  editFamiliesQuery,
  editCityQuery,
} = require('../../database/queries/dashboard/editCityQuery');

const editCityDashboard = async (req, res) => {
  const { id: cityId } = req.query;
  const {
    photo, cityName, area, location, families,
  } = req.body;
  try {
    if (cityId > 0) {
      await editCityQuery(photo, cityName, area, location, cityId);
      await editFamiliesQuery(families, cityId);
      return res.status(200).json({ msg: 'تم التعديل بنجاح' });
    }
    return res.status(400).json({ message: ' خطأ في الطلب ' });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: 'حدث خطأ ما في السيرفر' });
  }
};
module.exports = editCityDashboard;
