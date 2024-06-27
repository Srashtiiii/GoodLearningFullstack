const path =require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, "public")));        

let todo = ["Dancing", " Singing", "Coding", "Reading"];


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})