import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {
  toDos: toDo[ ] = [ ]
  
  saveTodo(toDo: toDo){
    this.toDos.push(toDo)
  }
  



  constructor() {
   }

}