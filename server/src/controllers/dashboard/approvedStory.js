const { approvePendingStory } = require('../../database/queries/dashboard');

const approvedStory = async (req, res) => {
  const { id } = req.query;
  try {
    const result = await approvePendingStory(id);
    res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ status: 500, msg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = approvedStory;
