const { getUser } = require('../../database/queries');
const { httpResponse } = require('../../helpers');

const userInfo = async (req, res) => {
  const { id } = req.userObj;
  const { rows } = await getUser(null, id);
  if (rows) {
    const { name, is_admin } = rows[0];
    res.json({
      id,
      name,
      role: is_admin,
    });
  } else {
    return httpResponse.badRequest(res, 'غير مصرح لك بالدخول');
  }
};
module.exports = userInfo;
