import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from "../services/todos.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title:string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      completed: false,
      id: Date.now(),
      date: new Date(),
      title: this.title
    }
    this.todosService.addTodo(todo);
    this.title = ''
  }

}
