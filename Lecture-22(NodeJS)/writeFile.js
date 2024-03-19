//to use fs module we will use the require it in our file.
const fs=require('fs');


//filepath: path absolute hota h..meaning computer ki root 
//directoty se laker jis bhi file me data likhna h us file tak ka path
// fs.writeFile(filePath)


// console.log(__dirname); // willl get path of the current file we are working in.

let filepath=__dirname + '/data.txt'
console.log(filepath);

fs.writeFile(filepath, 'Hello world', (err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("sab kuch bhadiya hai");    
    }
})