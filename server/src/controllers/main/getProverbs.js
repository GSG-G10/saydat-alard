const { getProverbQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getProverbs = async (req, res) => {
  const { char: letter, page } = req.query;
  const { rows, rowCount } = await getProverbQuery(letter, page);
  if (rowCount) {
    return httpResponse.ok(res, { proverbs: rows }, 'تم الطلب بنجاح');
  }
  return httpResponse.ok(res, { proverbs: null }, 'لا يوجد أمثال تبدأ بهذا الحرف');
};
module.exports = getProverbs;
