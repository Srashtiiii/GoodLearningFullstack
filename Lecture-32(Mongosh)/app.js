const path=require('path');
const express = require('express');
const app=express();
const PORT=4444;
const {mongoConnect ,getDB} =require('./connection/mongo');


app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}));


app.post('/student',(req, res) => {
    const db=getDB();
    const collection=db.collection('students');
    
})

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