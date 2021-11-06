const { addStoryQuery } = require('../../database/queries/cityPage');
const { httpResponse } = require('../../helpers');
const { uploadToCloudinary } = require('../utilities');

const uploadStory = async (req, res) => {
  const {
    content, title, cityId,
  } = req.body;
  let { data } = req.body;
  const { id } = req.userObj;

  const { url } = await uploadToCloudinary(data, {
    upload_preset: 'dev_setup',
  });
  data = url;
  await addStoryQuery(content, title, data, cityId, id);

  return httpResponse.created(res, { data: null }, 'تم إضافة قصتك، بانتظار  الموافقة عليها');
};

module.exports = uploadStory;
