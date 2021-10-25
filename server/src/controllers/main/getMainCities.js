const { getMainCitiesQuery } = require('../../database/queries');

const getMainCities = async (req, res) => {
  try {
    const data = await getMainCitiesQuery();
    const { rows } = data;
    res.json(rows);
  } catch (error) { res.status(500).json({ status: 500, msg: 'Server Error' }); }
};
module.exports = getMainCities;