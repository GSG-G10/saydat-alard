const { getProverbQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getProverbs = async (req, res) => {
  const { char: letter, page } = req.query;
  const { rows } = await getProverbQuery(letter, page);
  return httpResponse.ok(res, { proverbs: rows }, 'تم الطلب بنجاح');
};
module.exports = getProverbs;
