const { getProverbQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getProverbs = async (req, res) => {
  const { rows } = await getProverbQuery();
  return httpResponse.ok(res, { proverbs: rows }, 'تم الطلب بنجاح');
};
module.exports = getProverbs;
