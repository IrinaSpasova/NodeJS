const { readFile } = require ('fs');

console.log(('started first task'));
//CHECK FILE PATH!!!

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})

console.log('starting next task asap');


// './content/first.txt' === '../content/first.txt' if ve try to start the file from his folder, not from app.js