const { deleteStoryQuery, getUserIdQuery } = require('../../database/queries');

const deleteStory = async (req, res) => {
  const { storyId } = req.params;
  const { id } = req.userObj;

  const { rows } = await getUserIdQuery(storyId);
  if (rows[0].user_id === id) {
    await deleteStoryQuery(storyId);
    res.json({ msg: 'تم الحذف بنجاح' });
  } else res.status(401).json({ msg: 'غير مسموح لك بالحذف  ' });
};
module.exports = deleteStory;
