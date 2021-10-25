const { getStoriesQuery } = require('../../database/queries');

const getDashboardStories = async (req, res) => {
  try {
    const result = await getStoriesQuery();
    const { rows, rowCount } = result;
    if (rowCount > 0) { res.status(200).json({ data: rows }); }
    else res.status(200).json({ msg: 'لا يوجد قصص لعرضها ' });
  } catch (error) {
    res.status(500).json({ status: 500, msg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getDashboardStories;
