const { addNewCityQuery, checkCityByNameQuery } = require('../../database/queries');

const addCity = async (req, res) => {
  const {
    cityName, area, location, image, quotation, is_main,
  } = req.body;

  try {
    const { rowCount } = await checkCityByNameQuery(cityName);
    if (rowCount) {
      res.status(400).json('هذه المدينة مضافة إلى المدن، يمكنك الذهاب تعديل البيانات لها من خلال لوحة التحكم');
    } else {
      await addNewCityQuery({
        cityName, area, location, image, quotation, is_main,
      });
      res.json({ msg: 'تم إضافة المدينة بنجاح' });
    }
  } catch (error) {
    res.status(500).json({ errMsg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = addCity;
