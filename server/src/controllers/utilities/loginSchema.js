const joi = require('joi');

module.exports = joi.object({
  email: joi.string().email().required().messages({
    'string.empty': 'البريد الالكتروني لا يمكن أن يكون فارغ',
    'any.required': '    البريد الالكتروني مطلوب  ',
  }),
  password: joi.string().alphanum().min(7).required()
    .messages({
      'string.pattern.base': '  يجب أن تحتوي كلمة المرور على الاقل على حرف واحد كبير و حرف واحد صغير ورمز و رقم  ',
      'string.empty': 'كلمة المرور لا يمكن أن تكون فارغة',
      'string.min': ' على اﻷقل{#limit}  كلمة المرور  يجب أن يحتوي على ',
      'any.required': '  كلمة المرور مطلوبة ',
    }),
});
