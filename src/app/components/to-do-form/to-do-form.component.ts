import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/model/to-do';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  toDo: ToDo;

  constructor(private toDoDataService:ToDoDataService) {
      this.toDo = new ToDo(null, false, null);
   }
   
  ngOnInit() {

  }
