const path=require('path');
const express = require('express');
const app=express();
const PORT=4444;
const {mongoConnect} =require('./connection/mongo');


app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}));


mongoConnect()
.then(() => {
    console.log("DB connection established");
app.listen(PORT,() => {
    console.log(`https://localhost:`+PORT)
});

})

.catch(err=>{
    console.log("Error while connecting to DB");
})