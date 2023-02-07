import { Injectable } from '@angular/core';
import { ToDo } from '../model/to-do';

@Injectable()
export class ToDoDataService {
  toDos: ToDo[] = [];

  saveTodo(toDo: ToDo) {
    this.toDos.push(toDo);
  }

  constructor() {
    this.toDos.push(new ToDo('Putzen', true, '09.03.2022'));
    this.toDos.push(new ToDo("Emre Tö", false,"Yeahh"))
  }
}
