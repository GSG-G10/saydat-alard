const { getCitiesNamesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getCitiesNames = async (req, res) => {
  const { city } = req.query;
  const { rowCount, rows } = await getCitiesNamesQuery(city);
  if (rowCount) {
    return httpResponse.ok(res, { cities: rows }, 'تم إرسال المدن التي تبدأ بهذه الحروف');
  }
  return httpResponse.ok(res, { cities: null }, 'لا يوجد مدن تبدأ بهذه الأحرف');
};

module.exports = getCitiesNames;
