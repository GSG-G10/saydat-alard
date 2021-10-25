const { updateStoryQuery } = require('../../database/queries');

const updateStory = async (req, res) => {
  const { id } = req.params;
  const { content, title, image } = req.body;
  try {
    await updateStoryQuery(id, content, title, image);
    res.status(200).json({ msg: 'تم التعديل بنجاح' });
  } catch (error) { res.status(500).json({ status: 500, msg: 'Server Error' }); }
};
module.exports = updateStory;
