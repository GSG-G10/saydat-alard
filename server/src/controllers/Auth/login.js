const bcrypt = require('bcryptjs');
const { getUser } = require('../../database/queries');
const schema = require('../utilities/loginSchema');
const { signToken } = require('../utilities/jwt');

const login = async (request, response) => {
  try {
    const value = await schema.validateAsync(request.body);
    const { rows } = await getUser(value.email);
    const user = rows[0];

    if (!user) {
      throw new Error('wrong email or password');
    }

    const validatedPassword = await bcrypt.compare(
      value.password,
      user.password,
    );

    if (!validatedPassword) {
      throw new Error('invalid email or password');
    }

    if (validatedPassword) {
      const token = await signToken(user);

      response.cookie(
        'token',
        token,
        { maxAge: 1000 * 60 * 60 * 24 * 1 },
        { httpOnly: true },
      );
      response.json({ msg: 'Logged in successfully' });
    } else {
      throw new Error('Incorrect password');
    }
  } catch (error) {
    response.status(400).json({ msg: error.message });
  }
};

module.exports = login;
