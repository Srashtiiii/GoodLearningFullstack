function outerFun() {
    function innerFun() {
        console.log("Inside Inner function");
    }
    return innerFun;
}

let f=outerFun();
console.log(f);
f(); 

// function add(a,b) {
//     return a+b;
// }

// function subtract(a,b) {
//     return a-b;
// }






// function doOperations(add, subtract){
//     console.log(add(10,20));
//     console.log(subtract(30,10));
// }

// doOperations(add, subtract);
// // doOperations(function add(a,b) {
// //     return a+b;
// //     }, function subtract(a,b) {
// //         return a-b;
// //     });
