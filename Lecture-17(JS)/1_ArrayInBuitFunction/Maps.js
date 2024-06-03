 let arr=[1,2,3,4,5];

 let newArr=arr.map(function(val,indx,arr)
{
    return val*val;
})
console.log(arr);
console.log(newArr);

let newArr1=arr.map(val=>val*val);

let boolArr=arr.map((val)=>{
    if(val%2==0) return true;
    else return false;
})

console.log(boolArr);