const { editCityQuery } = require('../../database/queries');

const editCityDashboard = async (req, res) => {
  const { id } = req.query;
  const {
    photo, cityName, area, location, families,
  } = req.body;
  try {
    await editCityQuery(id, photo,
      cityName,
      area,
      location,
      families);
    res.status(200).json({ msg: 'تم التعديل بنجاح' });
  } catch (error) {
    res.status(500).json({ status: 500, msg: 'حدث خطأ ما في السيرفر' });
  }
};
module.exports = editCityDashboard;
