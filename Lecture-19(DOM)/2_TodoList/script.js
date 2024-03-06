let inp=document.querySelector('.inp');
let btn=document.querySelector('.btn');
let movieList=document.querySelector('.movieList');

btn.addEventListener('click', () => {
    let taskName=inp.value;
    console.log(taskName);
    let li=document.createElement('li');
    li.innerText=taskName;
    
    movieList.appendChild(li);

})