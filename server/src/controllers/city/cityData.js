const { httpResponse, boomHandler } = require('../../helpers');
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
  boomHandler.notFound('لا توجد مدينة بهذا الاسم');
};
module.exports = getCityData;
