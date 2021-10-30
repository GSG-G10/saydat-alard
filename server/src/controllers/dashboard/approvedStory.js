const { approvePendingStory } = require('../../database/queries/dashboard');
const { httpResponse } = require('../../helpers');

const approvedStory = async (req, res) => {
  const { id } = req.query;
  await approvePendingStory(id);
  httpResponse.ok(res, null, 'تم إضافة القصة إلى صفحة المدينة');
};

module.exports = approvedStory;
