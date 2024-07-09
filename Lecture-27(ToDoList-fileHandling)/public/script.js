console.log("Hello");


function sendReq(){
    axios.post('/submit-form', {
        username:"Srashti",
        password:"Srashti"
})
.then(({data})=>{
    console.log(data)
})
.catch(err=>{
    console.log(err);
})
}

sendReq();