const { getCityDataQuery, getstoryDataQuery } = require('../../database/queries');

const getCityData = async (req, res, next) => {
  const { cityId } = req.params;
  try {
    if (cityId > 0) {
      const { rows: cities } = await getCityDataQuery(cityId);
      if (cities.length) {
        const { rows: stories } = await getstoryDataQuery(cityId);
        return res.json({
          message: 'City Imported Successfuly',
          cityData: cities[0],
          stories,
        });
      }
      return res.json({
        message: 'There is no city',
      });
    }
    return res.json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
module.exports = getCityData;
