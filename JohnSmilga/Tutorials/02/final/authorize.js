const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user ==='john'){
        req.user = {name:'john', id:3};
        next();
    }else {
        res.status(401).send('Unauthorized!');
    }


    //test:
    //localhost:5000  --> Unauthorized!
    //localhost:5000/?user=john --> get resource


    // or 74 lecture
    // console.log('authorize');
    // next();
};

module.exports=authorize;

