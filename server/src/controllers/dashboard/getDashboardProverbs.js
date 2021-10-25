const { getProverbQuery } = require('../../database/queries');

const getDashboardProverbs = async (req, res) => {
  const { page, char } = req.query;

  try {
    const { rows, rowCount } = await getProverbQuery(char, page);
    if (rowCount) {
      res.status(200).json({ proverbs: rows });
    } else {
      res.status(404).json({ errorMsg: 'لا يوجد أمثال شعبية تبدأ بهذا الحرف' });
    }
  } catch (error) {
    res.status(500).json({ errorMsg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getDashboardProverbs;
