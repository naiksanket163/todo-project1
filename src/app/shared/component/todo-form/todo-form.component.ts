import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { UuidService } from '../service/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private _uuidservice : UuidService
  ) { }

  @ViewChild('todoForm') todoForm! : NgForm

  @Output() emitnewobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  ngOnInit(): void {
  }

  ontodoAdd(){
    if(this.todoForm.valid){
      let todoObj : Itodo = {
        ...this.todoForm.value,
        todoId : this._uuidservice.uuid()
      }
      this.emitnewobj.emit(todoObj)
    }
  }

}
