import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  //Marca la posicion para el ultimo id we se va a simular
  //incrementa automaticamente los id
  LastId: number = 0;

  //Marca la posicion para Todo's
  todos: Todo[] = [];

  constructor() { }

  //Simula POST /todos
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.LastId;
    }
    this.todos.push(todo);
    return this;
  }

  //Simula DELETE /todos/:id
  deleteTodoById(id: number): TodoService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  //Simula GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  //Simula GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  //Simula PUT /todos/:id
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
