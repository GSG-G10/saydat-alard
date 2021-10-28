const { deleteStoryQuery, getUserIdQuery } = require('../../database/queries');

const deleteStory = async (req, res) => {
  const { storyId } = req.params;
  const { id } = req.userObj;
  try {
    const { rows } = await getUserIdQuery(storyId);
    if (rows[0].user_id === id) {
      await deleteStoryQuery(storyId);
      res.json({ msg: 'تم التعديل بنجاح' });
    } else res.status(401).json({ msg: 'غير مسموح لك بالحذف  ' });
  } catch (error) { res.status(500).json({ msg: 'Server Error' }); }
};
module.exports = deleteStory;
