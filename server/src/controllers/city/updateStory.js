const { updateStoryQuery, getUserIdQuery } = require('../../database/queries');

const updateStory = async (req, res) => {
  const { storyId } = req.params;
  const { content, title, image } = req.body;
  const { id } = req.userObj;
  try {
    const { rows } = await getUserIdQuery(storyId);
    if (rows[0].user_id === id) {
      await updateStoryQuery(storyId, content, title, image);
      res.json({ msg: 'تم التعديل بنجاح' });
    } else res.status(401).json({ msg: 'غير مسموح لك بالتعديل ' });
  } catch (error) { res.status(500).json({ msg: 'حدث خطأ ما في السيرفر ' }); }
};
module.exports = updateStory;
