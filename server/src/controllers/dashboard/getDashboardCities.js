const { getDashboardCitiesQuery } = require('../../database/queries');

const getDashboardCities = async (req, res) => {
  const { page } = req.query;
  try {
    const result = await getDashboardCitiesQuery(page);
    res.status(200).json({ cities: result.rows });
  } catch (error) {
    res.status(500).json({ errorMsg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getDashboardCities;
