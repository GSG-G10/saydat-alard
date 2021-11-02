const { getDashboardCitiesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getDashboardCities = async (req, res) => {
  const { page } = req.query;
  const { rows, rowCount } = await getDashboardCitiesQuery(page);
  if (rowCount) {
    return httpResponse.ok(res, { cities: rows }, 'تم الطلب بنجاح');
  }
  return httpResponse.ok(res, { citites: null }, 'لا يوجد مدن في هذه الصفحة');
};

module.exports = getDashboardCities;
