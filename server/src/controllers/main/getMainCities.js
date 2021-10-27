const { getMainCitiesQuery } = require('../../database/queries');

const getMainCities = async (req, res) => {
  try {
    const data = await getMainCitiesQuery();
    const { rows } = data;
    res.status(200).json(rows);
  } catch (error) { res.status(500).json({ msg: 'Server Error' }); }
};
module.exports = getMainCities;
