const express=require('express');
const cluster = require('cluster');
const os = require('os');
const app=express();


 let totalCPus=os.cpus().length;
//number of cores =>
console.log(totalCPus);

app.get('/', (req, res) => {
   res.json({hi:898989})
})
 app.get('/slowApi/', (req, res)=>{
    for(var i=0;i<10_000_000_000;i++){

    }

    res.json({"blocking":'blocking api response'})
    })

app.listen(4000)