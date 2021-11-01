const { editProverbQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const editProvebDashboard = async (req, res) => {
  const { id } = req.query;
  const { content } = req.body;
  await editProverbQuery(id, content);
  httpResponse.created(res, null, 'تم التعديل بنجاح');
};
module.exports = editProvebDashboard;
