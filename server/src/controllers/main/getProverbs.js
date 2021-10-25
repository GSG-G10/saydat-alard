const { getProverbQuery } = require('../../database/queries');

const getProverbs = async (req, res) => {
  const { char } = req.query;
  console.log(char);
  try {
    const data = await getProverbQuery(char);
    const { rows } = data;
    res.status(200).json({ proverbs: rows });
  } catch (error) { res.status(500).json({ status: 500, msg: 'Server Error' }); }
};
module.exports = getProverbs;
