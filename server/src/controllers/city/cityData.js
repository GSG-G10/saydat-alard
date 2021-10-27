const { getCityDataQuery, getstoryDataQuery } = require('../../database/queries');

const getCityData = async (req, res, next) => {
  const { cityId } = req.params;
  try {
    if (cityId > 0) {
      const { rows: cities } = await getCityDataQuery(cityId);
      const { rows: stories } = await getstoryDataQuery(cityId);
      if (!cities.length) {
        return res.json({
          message: 'There is no city',
        });
      }
      return res.json({
        message: 'City Imported Successfuly',
        cityData: cities[0],
        stories,
      });
    }
    return res.json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
module.exports = getCityData;
