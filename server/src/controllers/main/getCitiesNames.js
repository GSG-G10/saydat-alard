const { getCitiesNamesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getCitiesNames = async (req, res) => {
  const { city } = req.query;
  const { rows } = await getCitiesNamesQuery(city);
  return httpResponse.ok(res, { cities: rows }, 'تم إرسال المدن التي تبدأ بهذه الحروف');
};

module.exports = getCitiesNames;
