// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
//... + setInterval and setTimeOut

setInterval(()=>{
console.log('Hello World');
}, 1000);

//to stop it  -> ctrl+c