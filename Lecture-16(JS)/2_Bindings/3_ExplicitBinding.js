function hello(state,country){
    console.log("Name",this.name);
    console.log("Hobby",this.hobby);
    console.log("State",state);
    console.log("country",country);
}

let person1={
    name:"Rahul",
    hobby:"Cricket"
}

let person2={
    name:"Raj",
    hobby:"Football"
}

//1. call ke through bind krna: inbuilt function to change the bind inside hello function
//SYNTAX: hello.call(this, arguments);
//hello.call(person1); //hello ke andar jo this hoga that will point to 'person1'
// hello.call(person2,"Delhi","India"); 

//2.Apply ke through bind krna:inbuilt function to change the bind inside hello function
//here arguments are written inside array
//SYNTAX:hello.apply(this,[arguments]);
// hello.apply(person2,["Delhi","USA"]);

//call and apply ek dum immediately funcition ko call/invoke kr dete hai



