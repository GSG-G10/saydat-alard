const { deleteStoryQuery } = require('../../database/queries');

const deleteStoryDashboard = async (req, res) => {
  const { storyId } = req.params;
  try {
    const result = await deleteStoryQuery(storyId);
    if (result.rowCount > 0) {
      res.json({ msg: 'تم الحذف بنجاح' });
    } else res.status(400).json({ msg: 'Bad request' });
  } catch (error) { res.status(500).json({ status: 500, msg: 'Server Error' }); }
};
module.exports = deleteStoryDashboard;
