const { editProverbQuery } = require('../../database/queries');

const editProvebDashboard = async (req, res) => {
  const { id } = req.query;
  const { content } = req.body;
  try {
    await editProverbQuery(id, content);
    res.json({ msg: 'تم التعديل بنجاح' });
  } catch (error) {
    res.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};
module.exports = editProvebDashboard;
