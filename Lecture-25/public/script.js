const btn=document.querySelector('button');
const inp=document.querySelector('input');

btn.addEventListener('click',async (ev)=>{
    ev.preventDefault(); //form ko submit nhi hone dega
    // console.log("clicked");

    try{
        let {data}=await axios.get(`/gettask?task=${inp.value}`)
        console.log(data);
    }

    catch(err){
        console.log(err);
    }

})