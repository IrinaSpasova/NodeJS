const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    //VALIDATION (SIMPLE):
    name:{
        type:String,
        required:[true,"Must provide name!"],
        trim:true,
        maxlength:[20,"Name can not be more than 20 characters!"]
    },
    completed:{
        type:Boolean,
    default:false,
    //this is false because we dont want our task to be completed wen we creat it
        },
});

module.exports = mongoose.model('Task', TaskSchema);