import Todo from "./model/Todo.js";
import TodoList from "./model/TodoList.js";

const todoList : TodoList = new TodoList();

const todoListContainer = document.getElementById("todolist-container") as HTMLUListElement;
const todoInput = document.getElementById("todo-input") as HTMLInputElement;

const refreshTodoDisplay = (): void => {
  todoListContainer.innerHTML = "";
  todoList.getAll().forEach((todo) => {
    const todoElement : HTMLLIElement = document.createElement("li");
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
    todoListContainer?.insertAdjacentElement("beforeend", todoElement);
  });
};

todoInput.addEventListener("keyup", (e: any) => {
  if (e.key == "Enter" && todoInput.value.trim()) {
    const newTodo: Todo = new Todo(todoInput.value);
    todoList.add(newTodo);
    todoInput.value = "";
    refreshTodoDisplay();
  }
});

refreshTodoDisplay();
