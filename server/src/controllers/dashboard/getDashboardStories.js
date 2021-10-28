const { getStoriesQuery } = require('../../database/queries');

const getDashboardStories = async (req, res) => {
  const { page } = req.query;
  try {
    const result = await getStoriesQuery(page);
    const { rows, rowCount } = result;
    if (rowCount > 0) {
      res.status(200).json({ data: rows });
    } else res.json({ msg: 'لا يوجد قصص لعرضها ' });
  } catch (error) {
    res.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getDashboardStories;
