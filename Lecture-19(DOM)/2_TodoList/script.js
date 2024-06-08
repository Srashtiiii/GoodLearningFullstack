let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let taskList = document.querySelector('.taskList');

btn.addEventListener('click', () => {
    let taskName = inp.value;
    let li = document.createElement('li');
    li.innerHTML = `
                <span class="taskText">${taskName}</span>
                <button class="upbtn">move up</button>
                <button class="downbtn">move down</button>
                <button class="deletebtn">delete</button>
            `;
    li.classList.add('taskItem');

    taskList.appendChild(li);
    
    inp.value = "";

})



taskList.addEventListener('click',(ev)=>{
    // console.log(ev.target);
    let item=ev.target;
    if(item.classList.contains('upbtn')){
        console.log("Up Button clicked");
        let parentElement = item.parentElement;
        let perviousElement = parentElement.perviousElementSibling;
        taskList.insertBefore(parentElement, perviousElement);
        console.log(parentElement);
        console.log(perviousElement);
    }

    else if(item.classList.contains('downbtn'))
        {
            console.log("Down Button clicked");
            let parentElement=item.parentElement;
            let perviousElement=parentElement.nextElementSibling;
            taskList.insertBefore(perviousElement,parentElement);

        }
        else if(item.classList.contains('deletebtn')){
            console.log('Delete Button clicked');
            let parentElement=item.parentElement;
            parentElement.remove();

        }
})