const { getCitiesNamesQuery } = require('../../database/queries');

const getCitiesNames = async (req, res) => {
  const { city } = req.query;
  try {
    const { rowCount, rows } = await getCitiesNamesQuery(city);
    if (rowCount) {
      res.json({ data: rows });
    } else {
      res.json({ msg: 'لا يوجد مدينة تبدأ بهذا الحرف' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getCitiesNames;
