const { getCitiesNamesQuery } = require('../../database/queries');

const getCitiesNames = async (req, res) => {
  const { city } = req.query;
  try {
    const result = await getCitiesNamesQuery(city);
    res.status(200).json({ data: result.rows });
  } catch (error) {
    res.status(404).json({ msg: 'لا يوجد مدينة تبدأ بهذه الحروف' });
  }
};

module.exports = getCitiesNames;
