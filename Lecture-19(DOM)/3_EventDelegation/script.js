
let itemList=document.querySelectorAll('.item');
let container=document.querySelectorAll('.container');
console.log(itemList);


// console.log(itemList);

// itemList.forEach((item)=>
// {
//     item.addEventListener('click',()=>{
//         console.log(item.innerText);
//     })
// })

container.addEventListener('click',(ev)=>{
    // console.log(ev.target);
    let item=ev.target;
    console.log(item.innerText);
})