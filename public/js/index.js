import Todo from "./model/Todo.js";
import TodoList from "./model/TodoList.js";
const todoList = new TodoList();
const todoListContainer = document.getElementById("todolist-container");
const todoInput = document.getElementById("todo-input");
const refreshTodoDisplay = () => {
    todoListContainer.innerHTML = "";
    todoList.getAll().forEach((todo) => {
        const todoElement = document.createElement("li");
        todo.isDone && todoElement.classList.add("is-done");
        todoElement.innerText = todo.name;
        todoElement.addEventListener("click", () => {
            todoList.toggleIsDone(todo.id);
            refreshTodoDisplay();
        });
        todoElement.addEventListener("dblclick", () => {
            todoList.remove(todo.id);
            refreshTodoDisplay();
        });
        todoListContainer === null || todoListContainer === void 0 ? void 0 : todoListContainer.insertAdjacentElement("beforeend", todoElement);
    });
};
todoInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && todoInput.value.trim()) {
        const newTodo = new Todo(todoInput.value);
        todoList.add(newTodo);
        todoInput.value = "";
        refreshTodoDisplay();
    }
});
refreshTodoDisplay();
