const { getUser } = require('../../database/queries');
const { error } = require('../utilities/loginSchema');

const userInfo = async (request, response) => {
  try {
    const { id } = request.userObj;
    const user = await getUser(null, id);
    if (user) {
      const { name, is_admin } = user.rows[0];
      response.json({
        id, name, is_admin,
      });
    } else {
      throw new Error('somthing went wrong!!');
    }
  } catch {
    response.status(400).json({ msg: error.message });
  }
};
module.exports = userInfo;
