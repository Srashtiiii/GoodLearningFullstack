let url='mywebsite.com/movie.mp4';

let p =new Promise(function(resolve, reject){
    setTimeout(function(){
        let extension =url.split('.').pop();
        if(extension != 'mp4') return reject("use correct url");
        resolve("HEllo");
},2000);
})

p.then(function(msg){
    console.log(msg)
    return "world";
}).then(function(newMsg){
    console.log(newMsg);
}).catch(function(err){ 
    
    console.log(err);
})