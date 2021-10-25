require('env2')('.env');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUser } = require('../../database/queries');
const  schema = require('./utilities/loginSchema')

const compare = (incomingPass, origPass) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(incomingPass, origPass, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });

const login = async (request, response) => {
    
    const { error, value } = schema.validate(request.body)

    if(error){
        throw new Error('invalid email or password !');
    }
  try {
    const { rows } = await getUser(value.email);
    const user = rows[0];

    if (!user) {
      throw new Error('This email is not used');
    }

    const result = await compare(value.password, user.password_hash)

    if (result) {
      const { password_hash, ...data } = user;
      const token = jwt.sign(data, process.env.SECRET_TOKEN);
      response.cookie(
        'authorization',
        token,
        { maxAge: 1000 * 60 * 60 * 24 * 1 },
        { httpOnly: true }
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