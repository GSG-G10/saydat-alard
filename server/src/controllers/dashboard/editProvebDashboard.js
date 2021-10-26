const { editProverbQuery } = require('../../database/queries');

const editProvebDashboard = async (req, res) => {
  const { id } = req.query;
  const { content } = req.body;
  try {
    await editProverbQuery(id, content);
    res.status(200).json({ msg: 'تم التعديل بنجاح' });
  } catch (error) {
    res.status(500).json({ status: 500, msg: 'حدث خطأ ما في السيرفر' });
  }
};
module.exports = editProvebDashboard;
