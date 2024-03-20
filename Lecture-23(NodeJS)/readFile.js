const fs=require('fs/promises');
const filepath=__dirname + '/database/data.json';

let data=['Coding', 'Dancing', 'Singing'];

fs.readFile(filepath,
