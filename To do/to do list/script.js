//selector
var todoInput = document.querySelector('.todo-input');
var btn = document.querySelector('button'); //direct element in query selector
var todoList = document.querySelector('ul')

//event handler

btn.onclick = create;
todoList.onclick = deletecheck;


//functions
function create(e) {
    e.preventDefault()
    if (todoInput != " ") {
        var newDiv = document.createElement('div')
        newDiv.classList.add('todo')

        var newLi = document.createElement('li')
        newLi.classList.add('list-item');
        newLi.innerHTML = todoInput.value;
        newDiv.appendChild(newLi)

        var compbtn = document.createElement('button')
        compbtn.classList.add('complete')
        compbtn.innerHTML = '<i class="fa fa-check"></i>'
        newDiv.appendChild(compbtn)

        var deletebtn = document.createElement('button')
        deletebtn.classList.add('delete')
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>'
        newDiv.appendChild(deletebtn)

        todoList.appendChild(newDiv)
        todoInput.value = " ";
    } else {
        alert("blank fields not allowed")
    }
}

function deletecheck(e) {
    var event = e.target;
    //console.log(event)
    if (event.classList[0] == "delete") {
        //console.log('Delete button pressed')
        var parent = event.parentElement;

        //console.log(parent)
        parent.remove();
    }
    if (event.classList[0] == "complete") {
        var parent = event.parentElement;
        // console.log('Check button pressed')
        parent.classList.toggle('completed')
    }
}