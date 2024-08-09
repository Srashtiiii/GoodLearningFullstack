const path=require('path');
const express = require('express');
const app = express();
const PORT =4444;

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'hbs');


let todos=["cricket", "dance", "hockey", "singing"];


app.get('/',(req, res) => {
//  res.sendFile(path.join(__dirname,'index.html'));   
res.render('index',{
    name:"Srashti Gautam" ,
    todos
})
})




app.listen(PORT,() => {
    console.log(`http://localhost:`+PORT);

});