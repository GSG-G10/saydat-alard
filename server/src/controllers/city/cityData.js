const { httpResponse } = require('../../helpers');
const {
  getCityDataQuery,
  getstoryDataQuery,
} = require('../../database/queries');

const getCityData = async (req, res) => {
  const { cityId } = req.params;

  const { rows: cities, rowCount } = await getCityDataQuery(cityId);
  if (rowCount) {
    const { rows: stories } = await getstoryDataQuery(cityId);
    return httpResponse.ok(res, { cityData: cities[0], stories }, 'تم تحميل بيانات المدينة بنجاح');
  }
  return httpResponse.ok(res, { cityData: null }, 'لا توجد مدينة بهذا الاسم');
};
module.exports = getCityData;
