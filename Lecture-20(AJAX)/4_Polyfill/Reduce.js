let arr=[1,2,3,4,5];

Array.prototype.myReduce = function(fun)
{
        let arr=this;
        
        for(let i=0;i<arr.length;i++)
        {
            

        }
}

let x= arr.reduce((acc,val,indx,arr)=>
{
    return acc * val
})
console.log(x);