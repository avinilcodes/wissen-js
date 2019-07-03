import 'bootstrap/dist/css/bootstrap.css';


//----------------------------------------------------
// DOM API
//----------------------------------------------------
//step-1 :  query DOM elements & bind event-listener(s)

let alertBox = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')
let nextBtn = document.querySelector('.btn-success')

showBtn.addEventListener('click',e=>{
alertBox.style.display=""
alertBox.innerHTML="hello user"
})
hideBtn.addEventListener('click',e=>{
    alertBox.style.display="none"
})
nextBtn.addEventListener('click',e=>{
    alertBox.innerHTML="you can look at your todos"
})

//----------------------------------------------------
// XHR API / Fetch API
//----------------------------------------------------

let todosBtn = document.querySelector('.btn-dark')
todosBtn.addEventListener('click',e=>{
    let todoListEle= document.getElementById('todo-list')
    let promise = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    document.getElementById('progress').innerHTML = "Loading Todos.."
    promise
    .then(response=>response.json())
    .then(todos=>{
        let arr = todos.map(todo=>{
            let liTemplate = `
            <li class="list-group-item ${todo.completed ? 'bg-info' : ''}">
            <span class="badge badge-dark">${todo.id}</span>
            ${todo.title}
            <span class="text text-warning">${todo.completed}<span>
       </li>
        `
        return liTemplate
        })
        todoListEle.innerHTML=arr.join(" ")
        document.getElementById('progress').innerHTML = "" 
    })
    .catch(e=>{
        document.getElementById('progress').innerHTML = "failed to load todo.."
    })
})


let todosCount = document.getElementById('todos-count');
todosBtn.addEventListener('click', e => {
    loadTodos(5)
})
todosCount.addEventListener('change', e => {
    let count = e.target.value;
    
    if (count === 'all') loadTodos(200)
    else loadTodos(count)
})

//----------------------------------------------------
// Timer API
//----------------------------------------------------

let timeSpan = document.getElementById('time-span');

setInterval(e => {
    timeSpan.innerHTML = new Date().toLocaleTimeString();
}, 1000);   // event


