//leraning to build APIs

const path=require('path');
const express = require('express');
const app = express();
const PORT=3000;

app.use(express.urlencoded({extended: true}));


let todos =['cricket', 'dance', 'singular', 'hockey'];


//1. GET '/todos': return all the todos
app.get('/todos',(req,res)=>{
    res.send(todos);
})

//2. POST '/todos': add a newTask to todos array
app.listen(PORT,() => {
    console.log(`http"//localhost:`+PORT);
});