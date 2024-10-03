import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TaskFormComponent,
    TaskListingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
