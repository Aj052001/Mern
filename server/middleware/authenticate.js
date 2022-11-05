const jwt = require("jsonwebtoken")
const User  = require("../model/userSchema")
const authenticate = async (req,res,next)=>{
    try{
             const token  = req.cookies.jwt;
             const verifyUser = jwt.verify(token,process.env.SECRET_KEY)
            // console.log(verifyUser);
            const user = await  User.findOne({_id:verifyUser.id, "tokens.token":token})
            
            if(!user)
            {
                throw new Error('user not found')
            }
            else{
                req.token = token;
                req.user = user;
                req.userID = user._id;
                next();
            }
            
            
    }catch(error){
       res.status(401).send("unauthorise")
       console.log(error)
    }
}

module.exports = authenticate;