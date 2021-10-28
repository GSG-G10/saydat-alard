const getUser = require('../../database/queries/getUser');
const { error } = require('./loginSchema');

const userInfo = async (request, response) => {
  try {
    const { id } = request.userObj;
    const user = await getUser(null, id);
    if (user) {
      response.json(user.rows);
    } else {
      throw new Error('somthing went wrong!!');
    }
  } catch {
    response.status(400).json({ msg: error.message });
  }
};
module.exports = userInfo;
