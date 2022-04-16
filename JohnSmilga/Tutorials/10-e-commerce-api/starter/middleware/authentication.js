const CustomError = require('../errors');
const {isTokenValid} = require('../utils');

const authenticateUser = async(req,res,next)=>{
    const token = req.signedCookies.token;

   /*test:  if(!token){
        console.log('error,no token present');
    }else{
        console.log('token is present');
    }*/

    if(!token){
        throw new CustomError.UnauthenticatedError('Authentication Invalid');
    }

    try {
        const { name, userId, role} = isTokenValid({ token }); // this row is destructured payload
       // rest:  console.log(payload);
       req.user ={
        name,
        userId,
        role
       }
        next();
    } catch (error) {
        throw new CustomError.UnauthenticatedError('Authentication Invalid');
    
    }
    
    
}

module.exports = {
    authenticateUser,
}