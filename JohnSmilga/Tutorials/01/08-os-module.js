// this is build in module, that's why we use only require('os')!
//test:
//os.   will give us methods, we also can destructure it if we know the methods that we want to use  ( const {...} = require('os'))
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

// os === operating system 

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)