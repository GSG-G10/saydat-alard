const {
  addNewCityQuery,
  checkCityByNameQuery,
} = require('../../database/queries');
const { uploadToCloudinary } = require('../utilities');

const addCity = async (req, res) => {
  const {
    cityName, area, location, data, quotation, is_main,
  } = req.body;

  try {
    const { rowCount } = await checkCityByNameQuery(cityName);
    if (rowCount) {
      res
        .status(400)
        .json(
          'هذه المدينة مضافة إلى المدن، يمكنك الذهاب تعديل البيانات لها من خلال لوحة التحكم',
        );
    } else {
      const uploadResponse = await uploadToCloudinary(data, {
        upload_preset: 'dev_setup',
      });
      const { url } = uploadResponse;

      await addNewCityQuery({
        cityName,
        area,
        location,
        url,
        quotation,
        is_main,
      });
      res.status(201).json({ msg: 'تم إضافة المدينة بنجاح' });
    }
  } catch (error) {
    res.status(500).json({ errMsg: ' خطأ ما في السيرفر' });
  }
};

module.exports = addCity;
