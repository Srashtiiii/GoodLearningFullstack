const path=require('path');
const express = require('express');
const app = express();
const PORT=4444;


app.use(express.static(path.join(__dirname, 'public')));

// app.get('/',(req, res) => {
//     const{name} = req.query;
//     res.send("hello world!");
// })

app.post('/form',(req,res)=>{

})

app.listen(PORT, () => {
    console.log(`http://localhost:`+PORT);
});