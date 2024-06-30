const btn=document.querySelector('.btn');
const inp=document.querySelector('.inp');
const taskList=document.querySelector('.taskList');

function updateTaskList(todos) {
    taskList.innerText=""
    todos.forEach(e=>{
        let li=document.createElement('li');
        li.innnerText=e;
        taskList.appendChild(li);
    })
}
btn.addEventListener('click',async (ev)=>{
    ev.preventDefault();
    try{
        let {data}=await axios.get(`/addtask?task=${inp.value}`)
        // console.log(data);
        updateTaskList(data);
    }

    catch(err){
        alert(err.message);
    }
})


async function initialTodosLoad(){
    try{
        let {data}=await axios.get('/todos');
        updateTaskList(data);
    }

    catch(err){
        alert(err.message);
    }

}

initialTodosLoad();