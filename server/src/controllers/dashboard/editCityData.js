const { editFamiliesQuery, editCityQuery } = require('../../database/queries');
const { uploadToCloudinary } = require('../utilities');
const { getCityDataQuery } = require('../../database/queries');

const editCityDashboard = async (req, res) => {
  const { id: cityId } = req.query;
  const {
    image, cityName, area, location, families,
  } = req.body;
  try {
    if (cityId > 0) {
      const { rows } = await getCityDataQuery(cityId);
      if (image === rows[0].image) {
        await editCityQuery(image, cityName, area, location, cityId);
      } else {
        const uploadResponse = await uploadToCloudinary(image, {
          upload_preset: 'dev_setup',
        });
        const { url } = uploadResponse;
        await editCityQuery(url, cityName, area, location, cityId);
      }
      await editFamiliesQuery(families, cityId);
      return res.status(200).json({ msg: 'تم التعديل بنجاح' });
    }

    return res.status(400).json({ msg: ' خطأ في الطلب ' });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: 'حدث خطأ ما في السيرفر' });
  }
};
module.exports = editCityDashboard;
