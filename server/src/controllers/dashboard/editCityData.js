const { editFamiliesQuery, editCityQuery } = require('../../database/queries');
const { uploadToCloudinary } = require('../utilities');
const { getCityDataQuery } = require('../../database/queries');
const { httpResponse, boomHandler } = require('../../helpers');

const editCityDashboard = async (req, res) => {
  const { id: cityId } = req.params;
  const {
    cityName, area, location, families, quotation,
  } = req.body;
  let { image } = req.body;
  const { rows, rowCount } = await getCityDataQuery(cityId);

  if (rowCount) {
    if (image !== rows[0].image) {
      const response = await uploadToCloudinary(image, {
        upload_preset: 'dev_setup',
      });
      image = response.url;
    }

    await editCityQuery(image, cityName, area, location, cityId, quotation);
    await editFamiliesQuery(families, cityId);
    return httpResponse.ok(res, null, 'تم التعديل على المدينة بنجاح');
  }

  boomHandler.notFound(
    ' هذه المدينة غير موجودة يمكنك إضافتها من خلال النقر على إضافة مدينة',
  );
};
module.exports = editCityDashboard;
