const fs = require('fs/promises');
const filepath = __dirname + '/database/data/jason';

let data = ['codings', 'dancings', 'singing'];

fs.readFile(filepath, {
    encoding: 'utf-8'
})
    .then(() => {
        data=JSON.parse(data);
        data.forEach(d=> {
        console.log(d);
    })
})

    .catch((err) => {
        console.log(err);
    })