let cntvalue=document.querySelector('.cntValue');
let reduceBtn=document.querySelector('.reduce');
let updateBtn=document.querySelector('.update');

updateBtn.addEventListener('click',()=>{
    // console.log(parseInt(cntvalue.innerText)+2);
    // console.log((+cntvalue.innerText)+2);
    // console.log(Number(cntvalue.innerText)+2);
    //to convert a string to a number

    cntvalue.innerText=parseInt(cntvalue.innerText)+1;

})

reduceBtn.addEventListener('click',()=>{
    cntvalue.innerText=parseInt(cntvalue.innerText)-1;
})