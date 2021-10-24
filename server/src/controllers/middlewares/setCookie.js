
const { sign } = require('jsonwebtoken');
const setCookie = (req,res) => {
  const {id,name,isAdmin}=req.userInfo
 const token = sign({ id ,name,isAdmin  }, process.env.SECRET_TOKEN);
res.cookie( 'checkAuth', token, { httponly: true, secure: true }).status(200).json({ msg: 'success' });
};
module.exports = setCookie;
