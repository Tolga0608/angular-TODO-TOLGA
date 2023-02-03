import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private  toDoDataServices: ToDoDataServices) {

   }
   get toDos(): toDo[][] {

    return this.toDoDataServices.toDos;
   }

  ngOnInit() {
  }

}