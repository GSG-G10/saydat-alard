const { getFamiliesQuery } = require('../../database/queries');

const getFamilies = async (req, res) => {
  const { letter } = req.query;
  const { cityId } = req.params;

  try {
    const { rowCount, rows } = await getFamiliesQuery(letter, cityId);
    if (rowCount) {
      res.json({ families: rows });
    } else {
      res.json({ msg: 'لا يوجد عائلات في هذه المدينة تبدأ بهذا الحرف' });
    }
  } catch (error) {
    res.status(500).json({ errorMsg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getFamilies;
