const { addProverQuery } = require('../../database/queries');

const addProverb = async (req, res) => {
  const { content } = req.body;
  try {
    await addProverQuery(content);
    res.status(201).json({ msg: 'تم الإضافة بنجاح' });
  } catch (error) {
    res.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};
module.exports = addProverb;
