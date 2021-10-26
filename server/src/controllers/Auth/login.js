require('env2')('.env');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUser } = require('../../database/queries');
const schema = require('../utilities/loginSchema');

const login = async (request, response) => {
  const { err, value } = schema.validate(request.body);

  if (err) {
    throw new Error('invalid email or password !');
  }
  try {
    const { rows } = await getUser(value.email);
    const user = rows[0];

    if (!user) {
      throw new Error('This email is not used');
    }

    const validatedPassword = await bcrypt.compare(
      value.password,
      user.password,
    );

    if (!validatedPassword) {
      throw new Error('invalid email or password');
    }

    if (validatedPassword) {
      const { hashedPassword, ...data } = user;
      const token = jwt.sign(data, process.env.SECRET_TOKEN);
      response.cookie(
        'authorization',
        token,
        { maxAge: 1000 * 60 * 60 * 24 * 1 },
        { httpOnly: true },
      );
      response.status(200).send({ message: 'Logged in successfully' });
    } else {
      throw new Error('Incorrect password');
    }
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
};

module.exports = login;
