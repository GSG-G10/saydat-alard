const { getFamiliesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getFamilies = async (req, res) => {
  const { letter } = req.query;
  const { cityId } = req.params;

  const { rowCount, rows } = await getFamiliesQuery(letter, cityId);
  if (rowCount) {
    return httpResponse.ok(res, { families: rows }, 'تم الطلب بنجاح');
  }
  return httpResponse.ok(res, { families: null }, 'لا يوجد عائلات في هذه المدينة تبدأ بهذا الحرف');
};

module.exports = getFamilies;
