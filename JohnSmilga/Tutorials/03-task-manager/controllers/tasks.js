const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError} = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({});
    res.status(200).json({
        tasks
    });

});

const createTask = asyncWrapper(async (req, res) => {
   
        const task = await Task.create(req.body);
        res.status(201).json({
            task
        });

});

const getTask = asyncWrapper(async (req, res, next) => {

   
        const {
            id: taskID
        } = req.params;
        const task = await Task.findOne({
            _id: taskID
        });


        //ALWAYS should put this:
        if (!task) {
           return next(createCustomError(`No task with id: ${taskID}`,404));
           
        }
        res.status(200).json({
            task
        });
  


    //res.send('get single task');
});

const deleteTask = asyncWrapper(async (req, res) => {
  
        const {
            id: taskID
        } = req.params;
        const task = await Task.findOneAndDelete({
            _id: taskID
        });
        if (!task) {
            return next(createCustomError(`No task with id: ${taskID}`,404));
        }

        res.status(200).json({
            task
        });

});

const updateTask = asyncWrapper(async (req, res) => {

        const {
            id: taskID
        } = req.params;

        const task = await Task.findOneAndUpdate({
            _id: taskID
        }, req.body, {
            new: true,
            runValidators: true,
            //without this we can send empty string to DB
        });

        if (!task) {
            return next(createCustomError(`No task with id: ${taskID}`,404));
        }

        res.status(200).json({
            task
        });      
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}


/* before middleware async function:
const Task = require('../models/Task');
const asyncWrapper =require('../middleware/async');

const getAllTasks = asyncWrapper (async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.status(200).json({
            tasks
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    }
    //res.send('get all tasks');
});

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            task
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    }

    //res.send('create task');
}

const getTask = async (req, res) => {

    try {
        const {
            id: taskID
        } = req.params;
        const task = await Task.findOne({
            _id: taskID
        });


        //ALWAYS should put this:
        if (!task) {
            return res.status(404).json({
                msg: `No task with id: ${taskID}`
            });
        }
        res.status(200).json({
            task
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    }


    //res.send('get single task');
}

const deleteTask = async (req, res) => {
    try {
        const {
            id: taskID
        } = req.params;
        const task = await Task.findOneAndDelete({
            _id: taskID
        });
        if (!task) {
            return res.status(404).json({
                msg: `No task with id: ${taskID}`
            });
        }

        res.status(200).json({
            task
        });

    } catch (error) {
        res.status(500).json({
            msg: error
        });
    }

    //res.send('delete task');
}

const updateTask = async (req, res) => {

    try {
        const{id:taskID} = req.params;

        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new: true,
            runValidators: true,
            //without this we can send empty string to DB
        });
       
        if (!task) {
            return res.status(404).json({
                msg: `No task with id: ${taskID}`
            });
        }
       
        res.status(200).json({task});
       //If we want response in postman: res.status(200).json({id:taskID,data:req.body});
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    }


    //res.send('update task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}*/