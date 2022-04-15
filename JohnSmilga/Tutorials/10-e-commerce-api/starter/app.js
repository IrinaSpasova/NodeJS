require('dotenv').config();
require('express-async-errors');
//express:
const express = require('express');
const app = express();

//rest of packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

//routers
const authRouter = require('./routes/authRoutes');

//database
const connectDB = require('./db/connect');

//middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

//test:
app.get('/api/v1',(req,res)=>{
    console.log(req.cookies);
    res.send('e-commerce api');

    //browser will return this cookie every time that request is sended
});

/*app.get('/',(req,res)=>{
    console.log(req.cookies);
    res.send('e-commerce api');
});*/

app.use('/api/v1/auth',authRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (console) {
        console.log(error);
    }
};

start();