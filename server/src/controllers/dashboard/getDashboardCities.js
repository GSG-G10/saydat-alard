const { getDashboardCitiesQuery } = require('../../database/queries');

const getDashboardCities = async (req, res) => {
  try {
    const result = await getDashboardCitiesQuery();
    res.status(200).json({ cities: result.rows });
  } catch (error) {
    res.status(500).json({ errorMsg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = getDashboardCities;
