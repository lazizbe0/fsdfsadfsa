let todoInput = document.querySelector('.tobo_input');
let todoBtn = document.querySelector('.todo_Btn');
let todoList = document.querySelector('.todo_list');


todoBtn.addEventListener("click", () => {
    if (todoInput.value != "") {
        todoAdd()
    }
});

function todoAdd() {
    let todoItems = document.querySelectorAll(".todo__item");
    console.log(todoItems);
    todoItems.forEach(items => {
        if (items.innerText != todoInput.value) {
            
        }
    });
    const todoValue = todoInput.value;
    todoInput.value = ""
    let todoItem = document.createElement("li");
    todoItem.classList.add("todo__item");
    todoItem.innerText = todoValue;
    let todoItemClose = document.createElement("button");
    todoItemClose.classList.add("todo__item-close");
    todoItemClose.innerText = "x";
    todoItem.append(todoItemClose);
    todoList.append(todoItem);
    
    
    
    const closeBtn = document.querySelectorAll(".todo__item-close");
    closeBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
        })
    });
}

document.addEventListener("keydown", function(e) {
    if (e.code == "Enter" && todoInput.value != " ") {
        todoAdd()
    }
})