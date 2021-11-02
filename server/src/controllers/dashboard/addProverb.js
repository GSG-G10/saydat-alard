const { addProverQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const addProverb = async (req, res) => {
  const { content } = req.body;

  await addProverQuery(content);
  httpResponse.ok(res, null, 'تم الإضافة بنجاح');
};
module.exports = addProverb;
