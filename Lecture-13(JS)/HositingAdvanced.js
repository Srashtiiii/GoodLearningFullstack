sayHello("srashti");

var sayHello =function(name){

    console.log("Hello " + name);
}

sayHello("Gautam");


//only LHS is hoisted not the RHS

console.log(x);

var x=10;


console.log(x);

var hello=function(name){
    console.log(name);
}

var x=20;

console.log(x);
hello("gautam");