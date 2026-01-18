import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';
import { todoArray } from '../const/todo';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss']
})
export class TodoDashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoArr : Array<Itodo> = todoArray

  getnewobj(todo : Itodo){
    this.todoArr.push(todo)
  }

}
