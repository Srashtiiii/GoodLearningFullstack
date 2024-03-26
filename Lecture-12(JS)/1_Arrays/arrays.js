var arr=[1,2,44,'world', true, 12.90];

console.log(arr);

arr.unshift('hello');
console.log(arr);

arr.shift();
console.log(arr);

arr.push('tata');
console.log(arr);

arr.pop();
console.log(arr);


//for seraching a index of a element of array
let indx = arr.indexOf('hello');
console.log("Index ",indx);
