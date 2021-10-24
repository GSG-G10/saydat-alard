const {verify} = require('jsonwebtoken');

const checkAuth = async (req,res,next) => {
    
    const {token} = req.cookies; 
if (!token){
    return res.status(400).json({message:"Not Authorized"})
}
if(!process.env.SECRET){
    return next(new Error('Internal server error!'))
}
try {
    const decoded = await verify(token.process.env.SECRET);
    req.userObj = decoded;
    return next();
}catch(err){
    return res.clearCookie('token').status(401).json({message:"Not Authorized"});
}

}

module.exports=checkAuth;
