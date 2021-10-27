const { cloudinary } = require('../utilities/cloudinary');
const { addStoryQuery } = require('../../database/queries/cityPage');

const uploadStory = async (request, response) => {
  const { content, title } = request.body;

  try {
    const fileStr = request.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'dev_setup',
    });

    addStoryQuery(content, title, uploadResponse.url);
    response.json({ msg: 'uploaded successfully' });
  } catch (err) {
    response.status(500).json({ err: 'Something went wrong' });
  }
};

module.exports = uploadStory;
