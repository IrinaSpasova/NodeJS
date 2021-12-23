//Modules

//const john = 'john';
// const peter = 'peter';

// const sayHi = (name) =>{
//   console.log(`Hello there ${name}`);
// }


// sayHi('Iss');
// sayHi(john);
// sayHi(peter);




// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

