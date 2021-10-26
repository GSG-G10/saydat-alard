const { getDashboardCitiesQuery } = require('../../database/queries');

const getDashboardCities = async (req, res) => {
  const { page } = req.query;
  try {
    const { rows } = await getDashboardCitiesQuery(page);
    res.json({ cities: rows });
  } catch (error) {
    res.status(500).json({ errorMsg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getDashboardCities;
