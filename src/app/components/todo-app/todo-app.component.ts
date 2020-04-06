import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addTodo() {
    if(this.newTodo.title) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    console.log(todo);
    this.todoService.deleteTodoById(todo.id);
    this.todoService.getAllTodos();
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}
