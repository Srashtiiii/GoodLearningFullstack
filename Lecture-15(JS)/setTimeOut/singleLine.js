let id= setTimeout(function (){
    console.log("Hello world");
},5000, setTimeout(function () {
    clearTimeout(id);
}, 6000));



