let kyaVaadaPuraHua=true;

let p=new Promise(function(resolve, reject)
{
    if(kyaVaadaPuraHua)
    {
        resolve("Pura hogya Vaada");
    }

    else
    {
        reject("Nhi ho Paya Vaada pura");
    }

})

// p.then(function(msg){
//     console.log("Message aaya hai", msg);
// }, function(err){
//     console.log("Error aaya hai", err);
// });


p.then(function(msg){
    console.log("Msg aaya hai", msg);
})

.catch(function(err){
    console.log("error aaya h", err);
})