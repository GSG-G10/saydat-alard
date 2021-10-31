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
      throw new Error('خطأ في البريد الإلكتروني أو كلمة المرور');
    }

    const validatedPassword = await bcrypt.compare(
      value.password,
      user.password,
    );

    if (!validatedPassword) {
      throw new Error('خطأ في البريد الإلكتروني أو كلمة المرور');
    }

    if (validatedPassword) {
      const token = await signToken(user);

      response.cookie(
        'token',
        token,
        { maxAge: 1000 * 60 * 60 * 24 * 1 },
        { httpOnly: true },
      );
      response.json({ msg: ' تم تسجيل الدخول بنجاح ' });
    } else {
      throw new Error('خطأ في البريد الإلكتروني أو كلمة المرور');
    }
  } catch (error) {
    response.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};
module.exports = login;
