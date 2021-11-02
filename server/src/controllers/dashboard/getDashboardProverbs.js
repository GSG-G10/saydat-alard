const { getProverbQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getDashboardProverbs = async (req, res) => {
  const { page, char } = req.query;
  const { rows, rowCount } = await getProverbQuery(char, page);
  if (rowCount) {
    return httpResponse.ok(res, { proverbs: rows }, 'تم الطلب بنجاح');
  }
  return httpResponse.ok(res, { proverbs: null }, 'لا يوجد أمثال شعبية تبدأ بهذا الحرف');
};

module.exports = getDashboardProverbs;
