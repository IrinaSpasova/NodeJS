const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB;






/*const mongoose = require('mongoose');

//const connectionString = ; TRANSFERRED TO .ENV

//this returns promise:
const connectDB = (url) => {
    return mongoose
        .connect((URL), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
}

// .then(()=>console.log('CONNECTED TO DB...'))
// .catch((err)=>console.log(err));

module.exports = connectDB;*/