import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  //Marks the position for the last simulated id
  //incrementa automaticly the ids
  LastId: number = 0;

  todos: Array<Todo> = [];

  constructor() {}

  //Simulate POST /todos
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.LastId;
    }
    this.todos.push(todo);
    return this;
  }

  //Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this;
  }

  //Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  //Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.filter((todo) => todo.id === id).pop();
  }

  //Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  //ToggleTodoComplete
  toggleTodoComplete(todo: Todo) {
    let updateTodo = this.updateTodoById(todo.id, { complete: !todo.complete });
    return updateTodo;
  }
}
