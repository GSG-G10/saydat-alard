const getUser = require('../../database/queries/getUser');
const { error } = require('./loginSchema');

const auth = async (request, response) => {
  try {
    const { id } = request.userObj;
    const user = await getUser(null, id);
    if (user) {
      response.status(200).json(user.rows);
    } else {
      throw new Error('somthing went wrong!!');
    }
  } catch {
    response.status(400).json({ error: error.message });
  }
};
module.exports = auth;
