export default class Todo {
  id: number = 0;
  name: string;
  isDone: boolean = false;

  constructor(name: string) {
    this.name = name;
  }
}
