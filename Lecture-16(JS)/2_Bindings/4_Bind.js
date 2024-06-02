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

let f= hello.bind(person1,"Maharashtra","Mumbai");
f();

let f1=hello.bind(person2);
f1("Delhi","Agra");