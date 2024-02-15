let arr=[1,2,3,4,5,];

console.log(arr);
console.log("Length :", arr.length);

for(let i=0 ; i<arr.length ; i++)
{
    console.log(arr[i]);
}


let str="";

for(let i=0 ; i<arr.length ; i++)
{
    str+=arr[i] + " ";
}

console.log(str);

//input in js front command line
console.log(process.argv);