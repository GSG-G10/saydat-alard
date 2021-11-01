const { getMainCitiesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getMainCities = async (req, res) => {
  const data = await getMainCitiesQuery();
  const { rows } = data;
  return httpResponse.ok(res, { cities: rows }, 'طلب البيانات تم بنجاح');
};
module.exports = getMainCities;
