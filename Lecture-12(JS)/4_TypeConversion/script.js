console.log("0 == \\t:",0 == '\t'); // true because of type conversion
console.log("0 == \\n:",0 == '\n'); // true because of type conversion
console.log("\\n == \\t:",'\n' == '\t'); // false because of no type conversion

//to convert a value to a number we can use + sign before it
console.log("Converting +\\t to Number :", +'\t');
console.log("+\\n :", +'\n');
console.log("+Hello :", +'Hello');

console.log("[] == 0 :", [] == 0); //true
console.log("\\t == 0 :", '\t' == 0); //true
console.log("[] == \\t :", [] == '\t'); // false
console.log("+[] == \\t :", +[] == '\t'); //true