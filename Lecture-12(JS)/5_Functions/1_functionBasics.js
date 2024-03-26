function add(a,b) {
    return a+b;

}

console.log(add(10,20));

function printName(name){
    return "Hello " + name;
}

console.log(printName("Srashti ji"));

//in javascript funciton is a datatype like number
//example:  

let sayHello = function hello(name){
    return "oh Hello " + name;
}

console.log(sayHello("Srashti ji"));

// as we invoke the function hello() by the name 'hello' therefore
// there is no use of writting it, we can skip it

//examples:

let sayBye= function(name){ // is is called anonymous function and it is stored inside sayBye variable
    return "oh bye " + name;
}

console.log(sayBye("Mithu bhai"));
