const { uploadToCloudinary } = require('../utilities');
const { updateStoryQuery, getUserIdQuery } = require('../../database/queries');
const { httpResponse, boomHandler } = require('../../helpers');

const updateStory = async (req, res) => {
  const { storyId } = req.params;
  const { content, title } = req.body;
  let { image } = req.body;
  const { id } = req.userObj;

  const { rows, rowCount } = await getUserIdQuery(storyId);
  if (rowCount) {
    if (rows[0].user_id === id) {
      if (image !== rows[0].image) {
        const { url } = await uploadToCloudinary(image, {
          upload_preset: 'dev_setup',
        });
        image = url;
      }
      await updateStoryQuery(storyId, content, title, image);
      return httpResponse.ok(res, { data: null }, 'تم التعديل بنجاح');
    }
    boomHandler.unAuthorized('غير مسموح لك بالتعديل ');
  }
  boomHandler.badRequest('لا يوجد قصة بهذه البيانات ');
};
module.exports = updateStory;
