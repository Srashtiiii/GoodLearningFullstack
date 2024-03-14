let arr=[1,2,3,4,5];

Array.prototype.myReduce = function(fun)
{
        let arr=this;
        let acc, start_indx;

        if(typeof(intiVal) != undefined) 
        {
            acc = intiVal;
            start_indx = 0;
        }
        else {
            acc = [0];
            start_indx = 1;
        }
    
        for(let i=start_indx;i<=arr.length;i++)
        {
            acc=fun(acc[i],i,arr);
        }
        return acc;
}

let x= arr.reduce((acc,val,indx,arr)=>
{
    return acc * val
},0)

console.log(x);