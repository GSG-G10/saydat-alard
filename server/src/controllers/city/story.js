const { addStoryQuery } = require('../../database/queries/cityPage');
const { uploadToCloudinary } = require('../utilities');

const uploadStory = async (request, response) => {
  const { content, title, cityId } = request.body;
  const { id } = request.userobj;
  try {
    const fileStr = request.body.data;
    const uploadResponse = await uploadToCloudinary(fileStr, {
      upload_preset: 'dev_setup',
    });

    await addStoryQuery(content, title, uploadResponse.url, cityId, id);
    response.status(201).json({ msg: 'uploaded successfully' });
  } catch (err) {
    response.status(500).json({ err: 'Something went wrong' });
  }
};

module.exports = uploadStory;
