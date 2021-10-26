const { deleteStoryQuery } = require('../../database/queries');

const deleteStoryDashboard = async (req, res) => {
  const { storyId } = req.params;
  try {
    await deleteStoryQuery(storyId);
    res.json({ msg: 'تم الحذف بنجاح' });
  } catch (error) { res.status(500).json({ status: 500, msg: 'Server Error' }); }
};
module.exports = deleteStoryDashboard;
