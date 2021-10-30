const { getMainCitiesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getMainCities = async (req, res, next) => {
  const data = await getMainCitiesQuery();
  const { rows, rowCount } = data;
  if (rowCount) {
    return httpResponse.internalServerError(next, 'nizar');
  }
  return httpResponse.ok(res, rows, 'طلب البيانات تم بنجاح');
};
module.exports = getMainCities;
