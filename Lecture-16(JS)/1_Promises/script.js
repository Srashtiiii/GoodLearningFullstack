let p=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
    },5000)
   
})

p.then(function(data){
    console.log("resolve wala function run ho gya");
})

.catch(function(err)
{
    console.log(err);
})