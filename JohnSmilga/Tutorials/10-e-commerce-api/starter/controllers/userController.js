const getAllUsers = async(req,res)=>{
    res.send('get all users route');
}

const getSingleUser = async(req,res)=>{
    res.send('get one user route');
}

const showCurrentUser = async(req,res)=>{
    res.send('display details route');
}

const updateUser = async(req,res)=>{
    res.send('update user route');
}

const updateUserPassword = async(req,res)=>{
    res.send('update password route');
}


module.exports={
    getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword
}