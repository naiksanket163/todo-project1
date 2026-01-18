import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';
import { todoArray } from '../const/todo';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss']
})
export class TodoDashComponent implements OnInit {
  editTodo !: Itodo

  constructor() { }

  ngOnInit(): void {
  }

  todoArr : Array<Itodo> = todoArray

  onEdit(todo : Itodo){
    this.editTodo = todo
  }

  onUpdate(todo : Itodo){
    console.log(todo)
    let getIndex = this.todoArr.findIndex(t => t.todoId == todo.todoId);
    this.todoArr[getIndex] = todo;
  }

}
