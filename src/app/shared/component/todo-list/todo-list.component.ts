import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() todoData! : Array<Itodo>
  @Output()EmitRemoveObj: EventEmitter <string> = new EventEmitter<string> ();


Onremove(id:string){
this.EmitRemoveObj.emit(id)
}


}


