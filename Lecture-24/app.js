const express=require('express')
const app = express()
const PORT=3000;

app.get('/',(req, res)=>{
    // console.log(req);
    res.send("Hello");
})

app.get('/greeting',(req, res)=>{
    res.send("Good Evening,sir");
})


app.get('/greeting',(req, res)=>{
    res.send("<h1>Good Evening,sir</h1>");
})

//PARAMS req: /greet/srashti' 

app.get('/greet/:name',(req,res)=>{
    console.log(req.params);
    res.send(`Hello ${req.params.name}`);

})



//QUERY PARAMETERS req: '/bye?=name=srashti&city=mathura



app.get('/bye',(req,res)=>{
    res.send('Hello ${req.query.name} from ${req.query.city}');
})


app.listen(PORT);
console.log('http://localhost:${PORT}');