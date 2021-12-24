const {
    readFile,
    writeFile
  } = require('fs');
  
  //need callback ( something, that run when we are done. like addEventListener):
  // Important- if we don't provide utf coding parameter it will print Buffer!!!
  
  console.log('start');
  // Impotant:  this is an example of callback hell:
  readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return null; // or just return;
    }
  
    // console.log(result); // test with and without utf8
  
    const first = result;
    readFile('./content/first.txt', 'utf8', (err, result) => {
      if (err) {
        console.log(err);
        return null; // or just return;
      }
      const second = result;
  
      writeFile('./content/result-async.txt',
        `Here is the result of ${first} and ${second}`, {
          flag: 'a',
        }, (err, result) => {
          if (err) {
            console.log(err);
            return null; // or just return;
          }
  
          console.log(result);
        }
      )
    });
  
  });