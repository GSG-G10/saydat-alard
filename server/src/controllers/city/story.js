const { cloudinary } = require('../utilities/cloudinary');
const { addStoryQuery } = require('../../database/queries/cityPage');

const uploadStory = async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'dev_setup',
    });

    addStoryQuery(req.body.content, req.body.title, uploadResponse.url);
    res.json({ msg: 'uploaded successfully' });
  } catch (err) {
    res.status(500).json({ err: 'Something went wrong' });
  }
};

module.exports = uploadStory;
