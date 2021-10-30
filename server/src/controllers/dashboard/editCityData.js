const { editFamiliesQuery, editCityQuery } = require('../../database/queries');
const { uploadToCloudinary } = require('../utilities');
const { getCityDataQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const editCityDashboard = async (req, res) => {
  const { id: cityId } = req.query;
  const {
    image, cityName, area, location, families, quotation,
  } = req.body;
  const { rows, rowCount } = await getCityDataQuery(cityId);

  if (rowCount) {
    if (image !== rows[0].image) {
      const { url } = await uploadToCloudinary(image, {
        upload_preset: 'dev_setup',
      });

      await editCityQuery(url, cityName, area, location, cityId, quotation);
      await editFamiliesQuery(families, cityId);
      return httpResponse.ok(res, null, 'تم التعديل على المدينة بنجاح');
    }
  }

  return httpResponse.badRequest(res, ' خطأ في الطلب ');
};
module.exports = editCityDashboard;
