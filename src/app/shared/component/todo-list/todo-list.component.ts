import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Output() emitEditTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()


  constructor() { }

  ngOnInit(): void {
  }

  @Input() todoData! : Array<Itodo>

  onEdit(todo :Itodo){
    this.emitEditTodo.emit(todo)
  }

}
