const { addStoryQuery } = require('../../database/queries/cityPage');
const { httpResponse } = require('../../helpers');
const { uploadToCloudinary } = require('../utilities');

const uploadStory = async (req, res) => {
  const {
    image, content, title, cityId,
  } = req.body;
  const { id } = req.userObj;

  const { url } = await uploadToCloudinary(image, {
    upload_preset: 'dev_setup',
  });
  await addStoryQuery(content, title, url, cityId, id);
  return httpResponse.created(res, { data: null }, 'تم إضافة قصتك، بانتظار  الموافقة عليها');
};

module.exports = uploadStory;
