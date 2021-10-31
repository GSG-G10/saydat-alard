const { getMainCitiesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getMainCities = async (req, res, next) => {
  const data = await getMainCitiesQuery();
  const { rows, rowCount } = data;
  if (!rowCount) {
    return httpResponse.internalServerError(next, 'خطأ في السيرفر');
  }
  return httpResponse.ok(res, { cities: rows }, 'طلب البيانات تم بنجاح');
};
module.exports = getMainCities;
