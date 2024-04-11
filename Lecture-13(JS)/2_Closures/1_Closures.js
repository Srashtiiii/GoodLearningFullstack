// function fun(){
//     console.log(x);
//     var x=10;
//     console.log(x);
// }

// fun();

// for(var i=0;i<10;i++)
// {

// }
// console.log(i);
// //console.log(x);




// function parent(){
//     var x=10;
//     function child(){
//         console.log(x);
//     }
//      return child;
// }

// let f=parent();



//when parent is called again new clouser is created
// function parent(){
//     var x=1;
//     function child(){
//         x++;
//         console.log(x);
//     }
//     return child;
// }

// let f=parent();
// let f1=parent();
// f(); //2
// f(); //3
// f(); //4

// f1(); //2
// f1(); //3
// f1(); //4




//if a bucket goes into a clourse then it will not go into another clourse
function grandparent() {
    var x = 1;
    function parent() {
        x++;
        function child() {
            x++;
            console.log(x);
        }
        return child;
    }
    return parent;
}

let fun = grandparent();

let f1 = fun();
let f2 = fun();

f1(); //4
f1(); //5
f2(); //6
f2(); //7