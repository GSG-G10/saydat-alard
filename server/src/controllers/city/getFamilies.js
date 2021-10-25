const { getFamiliesQuery } = require('../../database/queries');

const getFamilies = async (req, res) => {
  const { letter, cityId } = req.query;

  try {
    const result = await getFamiliesQuery(letter, cityId);
    if (result.rowCount) {
      res.status(200).json({ families: result.rows });
    } else {
      res.status(404).json('لا يوجد عائلات في هذه المدينة تبدأ بهذا الحرف');
    }
  } catch (error) {
    res.status(500).json({ errorMsg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getFamilies;
