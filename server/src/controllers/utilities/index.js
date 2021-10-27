const loginSchema = require('./loginSchema');
const { verifyToken } = require('./jwt');
const { schema } = require('./signupValidation.js');
const hashPassword = require('./hashPassword');
const comparePasswords = require('./comparePassword');
const { uploadToCloudinary } = require('./cloudinary');
const auth = require('./userInfo');

module.exports = {
  schema,
  hashPassword,
  comparePasswords,
  verifyToken,
  loginSchema,
  uploadToCloudinary,
  auth,
};
