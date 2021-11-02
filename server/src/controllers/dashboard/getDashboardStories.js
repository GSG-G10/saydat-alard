const { getStoriesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getDashboardStories = async (req, res) => {
  const { page } = req.query;
  const { rows } = await getStoriesQuery(page);

  return httpResponse.ok(res, { stories: rows }, 'تم الطلب بنجاح');
};

module.exports = getDashboardStories;
