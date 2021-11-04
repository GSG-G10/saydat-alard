const {
  addNewCityQuery,
  checkCityByNameQuery,
} = require('../../database/queries');
const { httpResponse, boomHandler } = require('../../helpers');
const { uploadToCloudinary } = require('../utilities');

const addCity = async (req, res) => {
  const {
    cityName, area, location, image, quotation, isMain,
  } = req.body;

  const { rowCount } = await checkCityByNameQuery(cityName);
  if (rowCount) {
    boomHandler.badRequest(
      'هذه المدينة مضافة إلى المدن، يمكنك الذهاب تعديل البيانات لها من خلال لوحة التحكم',
    );
  }
  const { url } = await uploadToCloudinary(image, {
    upload_preset: 'dev_setup',
  });

  await addNewCityQuery({
    cityName,
    area,
    location,
    url,
    quotation,
    isMain,
  });
  httpResponse.created(res, null, 'تم إضافة المدينة بنجاح');
};

module.exports = addCity;
