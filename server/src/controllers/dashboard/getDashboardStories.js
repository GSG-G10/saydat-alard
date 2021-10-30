const { getStoriesQuery } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const getDashboardStories = async (req, res) => {
  const { page } = req.query;
  const { rows, rowCount } = await getStoriesQuery(page);
  if (rowCount) {
    return httpResponse.ok(res, { stories: rows }, 'تم الطلب بنجاح');
  }
  return httpResponse.ok(res, { stories: null }, 'لا يوجد قصص لعرضها ');
};

module.exports = getDashboardStories;
