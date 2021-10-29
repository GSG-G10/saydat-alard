const { getProverbQuery } = require('../../database/queries');

const getDashboardProverbs = async (req, res) => {
  const { page, char } = req.query;

  try {
    const { rows, rowCount } = await getProverbQuery(char, page);
    if (rowCount) {
      res.json({ proverbs: rows });
    } else {
      res.json({ msg: 'لا يوجد أمثال شعبية تبدأ بهذا الحرف' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getDashboardProverbs;
