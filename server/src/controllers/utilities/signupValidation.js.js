const Joi = require('joi');

const schema = Joi.object().keys({
  name: Joi.string().min(4).required()
    .messages({
      'string.base': 'اسم المستخدم يجب ان يكون نص ',
      'string.empty': 'اسم المستخدم لا يمكن أن يكون فارغاً',
      'string.min': ' على اﻷقل{#limit} اسم المستخدم يجب أن يحتوي على ',
      'any.required': ' اسم المستخدم مطلوب  ',
    }),
  password: Joi.string().required().min(7)
    // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
    .messages({
      'string.pattern.base': '  يجب أن تحتوي كلمة المرور على الاقل على حرف واحد كبير و حرف واحد صغير ورمز و رقم  ',
      'string.empty': 'كلمة المرور لا يمكن أن تكون فارغة',
      'string.min': ' على اﻷقل{#limit}  كلمة المرور  يجب أن يحتوي على ',
      'any.required': '  كلمة المرور مطلوبة ',
    }),

  confirmPassword: Joi.ref('password'),
  email: Joi.string().email().required().messages({
    'string.empty': 'البريد الالكتروني لا يمكن أن يكون فارغ',
    'any.required': '    البريد الالكتروني مطلوب  ',
  }),
  orginialTown: Joi.string().required().messages({
    'string.empty': 'البلدة الأصلية  لا يمكن أن يكون فارغ',
    'any.required': '    البلدة الأصلية  مطلوبة  ',
  }),
}).options({ abortEarly: true });

module.exports = schema;
