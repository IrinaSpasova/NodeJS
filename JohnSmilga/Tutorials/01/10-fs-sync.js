// fs === File System

const {readFileSync, writeFileSync} = require('fs');
//this is like:
//const fs = require('fs')
//but we call specific method from fs



// need to specify path and encoding if we want to read:
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

// need to specify file name  and the value if we want to write. NodeJs wil create ( if there is no file) or edit it. If there is content in the file Node will overwrite it!:
writeFileSync('./content/writeFileSyncResult.txt', 
`This is the result of writeFileSync method. We can also put here result of ${first} and ${second}` ,
{flag:'a'}
);// if we want to add something, not to overwrite the content, we have to put third argument, {flag:'a'}
