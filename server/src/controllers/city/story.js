const { addStoryQuery } = require('../../database/queries/cityPage');
const { httpResponse } = require('../../helpers');
const { uploadToCloudinary } = require('../utilities');

const uploadStory = async (req, res) => {
  const {
    content, title, cityId,
  } = req.body;
  let { image } = req.body;
  const { id } = req.userObj;

  const { url } = await uploadToCloudinary(image, {
    upload_preset: 'dev_setup',
  });
  image = url;
  await addStoryQuery(content, title, image, cityId, id);

  return httpResponse.created(res, { data: null }, 'تم إضافة قصتك، بانتظار  الموافقة عليها');
};

module.exports = uploadStory;
