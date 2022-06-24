export default class TodoList {
    constructor() {
        this.todos = this.getFromLocal();
    }
    add(todo) {
        todo.id = this.getLastId() + 1;
        this.todos.push(todo);
        this.saveToLocal();
    }
    getLastId() {
        var _a;
        return ((_a = this.getAll().sort((a, b) => a.id - b.id)[this.todos.length - 1]) === null || _a === void 0 ? void 0 : _a.id) || 0;
    }
    getAll() {
        return this.todos;
    }
    toggleIsDone(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        this.todos[index].isDone = !this.todos[index].isDone;
        this.saveToLocal();
    }
    remove(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        this.todos.splice(index, 1);
        this.saveToLocal();
    }
    getFromLocal() {
        var _a;
        return JSON.parse((_a = localStorage.getItem("todos")) !== null && _a !== void 0 ? _a : "[]");
    }
    saveToLocal() {
        const data = JSON.stringify(this.todos);
        localStorage.setItem("todos", data);
    }
}
