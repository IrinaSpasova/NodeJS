
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


//middleware
app.use(express.static('./public')) //this attach frontend
app.use(express.json());

//routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App');
// });

app.use('/api/v1/tasks', tasks);

// 404
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();

  
//console.log('Task Manager App');



//app.get('/api/v1/tasks')        -get all tasks
//app.post('/api/v1/tasks')       -create a new task
//app.get('/api/v1/tasks/:id')    -get a single task
//app.patch('/api/v1/tasks/:id')  -update task
//app.delete('/api/v1/tasks/:id') -delete task