
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { UuidService } from '../service/uuid.service';
import { SnackBarService } from '../service/snackbar/snack-bar.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() editTodo !: Itodo
  @ViewChild('todoForm') todoForm !: NgForm
  @Output() emitUpdatedTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  isInEditMode : boolean = false

  constructor(
     private _snackbar : SnackBarService,
    private _uuidservice : UuidService
  ) { }

  

  @Output() emitnewobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editTodo']['currentValue']){
      this.isInEditMode = true;
      this.todoForm.form.patchValue(changes['editTodo']['currentValue'])
    }
  }

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
  onUpdate(){
    let UPDATED_TODO : Itodo = {...this.todoForm.value, todoId : this.editTodo.todoId};
    this.emitUpdatedTodo.emit(UPDATED_TODO);
    this.todoForm.reset();
    this.isInEditMode = false;
    this._snackbar.openSnackBar(`The Todo with id ${this.editTodo.todoId} is Updated Successfully.`)
    console.log(UPDATED_TODO)
  }

}
