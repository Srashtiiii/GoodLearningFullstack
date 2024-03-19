const fs=require('fs/promises');

let filepath= __dirname + 'database/data.json';

fs.readFile(filepath)
  .then(data) => {
        console.log(data.toString());
           })  
           .catch(err => {
                console.log(err);
           )};