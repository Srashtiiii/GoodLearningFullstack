const fs = require('fs/promises');
const filepath = __dirname + '/database/data/jason';

let data = ['codings', 'dancings', 'singing'];

fs.writeFile(filepath, JSON.stringify(data))
    .then(() => {
        console.log("Working fine");
    })

    .catch((err) => {
        console.log(err);
    })