const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));

if (list) {
    list.forEach((task) => {
        todoList(task);
    })
}
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    todoList();
})

