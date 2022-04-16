const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');

const getAllUsers = async(req,res)=>{
    //res.send('get all users route');
    const users = await User.find({role:'user'}).select('-password'); // -password' removes password from res
    res.status(StatusCodes.OK).json({users});
}

const getSingleUser = async(req,res)=>{
    //res.send('get one user route');
    const user = await User.findOne({_id:req.params.id}).select('-password');
    if(!user){
        throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
    }
    res.status(StatusCodes.OK).json({user});
}

const showCurrentUser = async(req,res)=>{
    res.send('display details route');
}

const updateUser = async(req,res)=>{
    //res.send('update user route');
     //test:
     res.send(req.body);
}

const updateUserPassword = async(req,res)=>{
    //res.send('update password route');
    //test:
    res.send(req.body);
}


module.exports={
    getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword
}