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
    response.status(201).json({ msg: 'uploaded successfully' });
  } catch (err) {
    response.status(500).json({ msg: 'Something went wrong' });
  }
};

module.exports = uploadStory;
