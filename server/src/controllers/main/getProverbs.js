const { getProverbQuery } = require('../../database/queries');

const getProverbs = async (req, res) => {
  const { char, page } = req.query;
  try {
    const data = await getProverbQuery(char, page);
    const { rows } = data;
    res.status(200).json({ proverbs: rows });
  } catch (error) { res.status(500).json({ msg: 'Server Error' }); }
};
module.exports = getProverbs;
