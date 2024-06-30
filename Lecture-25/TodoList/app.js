const path =require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, "public")));        
app.use(express.json());

let todos = ["Dancing", " Singing", "Coding", "Reading"];

app.get('/todos', (req, res) => {
    res.send(todos);
})


app.get('/addtasks', (req,res) => {
    let {task}=req.query;
    //agar task alreay exist krte h dont add task
    if(!todos.includes(task))
        {
            todos.push(task);
        }
    
    res.redirect('/todos');
});

app.use((req,res,next)=>{
    res.send({
        msg:"Kya Ulti Seedhi Request Bhej Rha hai mujhe",
        decentMsg: "Error 404: Page not found"
    });
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})