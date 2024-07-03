const path=require('path');
const express = require('express');
const app = express();
const PORT=4444;

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

// app.get('/',(req, res) => {
//     const{name} = req.query;
//     res.send("hello world!");
// })

app.get('/submit-form',(req, res) => {
    const {username,password} = req.query;
    res.send(`Received GET Request in /submit-form ${username}, ${password}`)
})


app.post('/submit-form',(req,res)=>{
    const {username, password} = req.body;
    res.send(`Received POST Request in /submit-form ${username}, ${password}`)
    

})

app.listen(PORT, () => {
    console.log(`http://localhost:`+PORT);
});