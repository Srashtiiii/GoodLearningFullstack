const path =require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, "public")));        

let todos = ["Dancing", " Singing", "Coding", "Reading"];

app.get('/todos', (req, res) => {
    res.send(todos);
})


app.get('/addtasks', (req,res) => {
    let {task}=req.query;
    todos.push(task);
    res.redirect('/todos');
});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})