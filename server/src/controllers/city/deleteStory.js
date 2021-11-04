const { deleteStoryQuery, getUserIdQuery } = require('../../database/queries');
const { boomHandler } = require('../../helpers');

const deleteStory = async (req, res) => {
  const { storyId } = req.params;
  const { id } = req.userObj;

  const { rows } = await getUserIdQuery(storyId);
  if (rows[0].user_id === id) {
    await deleteStoryQuery(storyId);
    res.json({ msg: 'تم الحذف بنجاح' });
  } else { return boomHandler.badRequest('غير مسموح لك بالحذف  '); }
};
module.exports = deleteStory;
