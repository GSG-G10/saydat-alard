const { compare } = require('bcryptjs');
const { getUser } = require('../../database/queries');
const schema = require('../utilities/loginSchema');
const { signToken } = require('../utilities/jwt');
const { httpResponse } = require('../../helpers');

const login = async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const { rows } = await getUser(value.email);
    const user = rows[0];

    if (!user) {
      return httpResponse.badRequest(res, 'كلمة المرور أو البريد الإلكتروني خطأ');
    }

    const validatedPassword = await compare(
      value.password,
      user.password,
    );

    if (!validatedPassword) {
      return httpResponse.badRequest(res, 'كلمة المرور أو البريد الإلكتروني خطأ');
    }

    if (validatedPassword) {
      const token = await signToken(user);

      res.cookie(
        'token',
        token,
        { maxAge: 1000 * 60 * 60 * 24 * 1 },
        { httpOnly: true },
      );
      return httpResponse.created(res, { user }, 'تم تسجيل الدخول بنجاح');
    }
    return httpResponse.badRequest(res, 'كلمة المرور أو البريد الإلكتروني خطأ');
  } catch (error) {
    httpResponse.internalServerError(next, 'خطأ في السيرفر');
  }
};
module.exports = login;
