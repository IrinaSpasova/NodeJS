// check username, password in post(login) request
//if exist create new JWT
//send back to front-end

//setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken');
const {BadRequest} = require('../errors');

const login = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    // mongo (will do validation for us.)
    //Joi (library for validation)
    // or we can check in the controller:
    if (!username || !password) {
        throw new BadRequest('Please, provide email and password');
    }

    //just for the demo, normally provided by DB:
    const id = new Date().getDate();

    //try to keep payload small, better experience for the user. And do not return pass here, bad practice!
    //just for demo, in production use long, complex and unguessable string value!!!!!!!!!!!!
    const token = jwt.sign({
        id,
        username
    }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    // test: console.log(username,password);
    // test: res.send('Fake Login/Register/Signup Route');

    res.status(200).json({
        msg: 'user created',
        token
    });
}

const dashboard = async (req, res) => {
    // test console.log(req.headers);

    // const authHeader = req.headers.authorization;
    // //Always hav to use correct syntax- after Bearer there is space!!!!!!!
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //     throw new CustomAPIError('No token provided!', 401);
    // }

    // const token = authHeader.split(' ')[1];
    // //console.log(token);

    // try{
    //     const decoded = jwt.verify(token,process.env.JWT_SECRET);
    //     //console.log(decoded);

    //     const luckyNumber = Math.floor(Math.random() * 100); //the number will be between 0 and 99
    //     res.status(200).json({
    //         msg: `Hello, ${decoded.username}`,
    //         secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    //     });
    // } catch(error){
    //     throw new CustomAPIError('Not authorized to access this route', 401);
    // }

   // console.log(req.user);

    const luckyNumber = Math.floor(Math.random() * 100); //the number will be between 0 and 99
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    });

  
}

module.exports = {
    login,
    dashboard
}