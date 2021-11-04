const { compare } = require('bcryptjs');
const { getUser } = require('../../database/queries');
const schema = require('../utilities/loginSchema');
const { signToken } = require('../utilities/jwt');
const { boomHandler, httpResponse } = require('../../helpers');

const login = async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const { rows } = await getUser(value.email);

    if (!rows.length) {
      boomHandler.unAuthorized('كلمة المرور أو البريد الإلكتروني خطأ');
    }
    const user = rows[0];
    const validatedPassword = await compare(
      value.password,
      user.password,
    );

    if (validatedPassword) {
      const token = await signToken(user);
      res.cookie(
        'token',
        token,
        { maxAge: 1000 * 60 * 60 * 24 * 1 },
        { httpOnly: true },
      );
      httpResponse.created(res, null, 'تم تسجيل الدخول بنجاح');
    } else {
      boomHandler.unAuthorized('كلمة المرور أو البريد الإلكتروني خطأ');
    }
  } catch (error) {
    if (error.details) {
      next(boomHandler.badRequest(error.message));
    } else {
      next(error);
    }
  }
};
module.exports = login;
