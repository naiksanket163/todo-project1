import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';
import { todoArray } from '../const/todo';
import { SnackBarService } from '../service/snackbar/snack-bar.service';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss']
})
export class TodoDashComponent implements OnInit {
  editTodo !: Itodo

  constructor(
    private _snackbar : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  todoArr : Array<Itodo> = todoArray

  getnewobj(todo : Itodo){
    this.todoArr.push(todo)
     this._snackbar.openSnackBar(`The Todo with id ${todo.todoId} is Added Successfully.`)
  }
  onEdit(todo : Itodo){
    this.editTodo = todo
  }

  onUpdate(todo : Itodo){
    console.log(todo)
    let getIndex = this.todoArr.findIndex(t => t.todoId === todo.todoId);
    this.todoArr[getIndex] = todo;
  }
definationRemove(id:string){
let getindex = this.todoArr.findIndex(todo => todo.todoId === id);
this.todoArr.splice(getindex,1)

}





}
