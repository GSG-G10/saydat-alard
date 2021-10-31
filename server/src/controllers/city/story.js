const { addStoryQuery } = require('../../database/queries/cityPage');
const { uploadToCloudinary } = require('../utilities');

const uploadStory = async (request, response) => {
  const {
    data, content, title, cityId,
  } = request.body;
  const { id } = request.userObj;
  try {
    const uploadResponse = await uploadToCloudinary(data, {
      upload_preset: 'dev_setup',
    });
    await addStoryQuery(content, title, uploadResponse.url, cityId, id);
    response.status(201).json({ msg: 'تم التحميل بنجاح  ' });
  } catch (err) {
    response.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = uploadStory;
