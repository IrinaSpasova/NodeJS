const mongoose = require('mongoose');

//TODO change dbName
const dbName = 'wildlife';
const connectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
    try {
        await mongodb.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connect');

        mongoose.connection.on('error', (err) => {
            console.error('Database  error');
            console.log(err);
        });
    } catch (err) {
        console.error('Database connection error');
        process.exit(1);
    }
};