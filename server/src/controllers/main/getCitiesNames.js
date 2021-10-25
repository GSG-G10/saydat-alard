const { getCitiesNamesQuery } = require('../../database/queries');

const getCitiesNames = async (req, res) => {
  const { city } = req.query;
  try {
    const result = await getCitiesNamesQuery(city);
    if (result.rowCount) {
      res.status(200).json({ data: result.rows });
    } else {
      res.status(404).json({ msg: 'لا يوجد مدينة تبدأ بهذا الحرف' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getCitiesNames;
