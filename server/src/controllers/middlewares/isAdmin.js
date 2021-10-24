
const isAdmin = (res ,req , next) => {
    const isAdmin = req.userObj;
 if(isAdmin){
   return next();
 }else{
     return res.status(400).json({msg:"Forbiden Access"})
 }
}
module.exports= isAdmin;