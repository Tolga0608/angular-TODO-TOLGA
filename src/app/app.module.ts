import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoDataService } from './services/to-do.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ToDoListComponent, ToDoDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
