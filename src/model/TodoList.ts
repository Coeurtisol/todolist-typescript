import Todo from "./Todo.js";

export default class TodoList {
  todos: Todo[] = this.getFromLocal();

  add(todo: Todo): void {
    todo.id = this.getLastId() + 1;
    this.todos.push(todo);
    this.saveToLocal();
  }

  getLastId(): number {
    return this.getAll().sort((a, b) => a.id - b.id)[this.todos.length - 1]?.id || 0;
  }

  getAll(): Todo[] {
    return this.todos;
  }

  toggleIsDone(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index].isDone = !this.todos[index].isDone;
    this.saveToLocal();
  }

  remove(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(index, 1);
    this.saveToLocal();
  }

  getFromLocal(): Todo[] {
    return JSON.parse(localStorage.getItem("todos") ?? "[]");
  }

  saveToLocal(): void {
    const data = JSON.stringify(this.todos);
    localStorage.setItem("todos", data);
  }
}
