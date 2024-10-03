import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListingComponent } from './task-listing/task-listing.component';
const routes: Routes = [
  {path: 'to-do-list',component :ToDoListComponent },
  {path: 'task-form',component:TaskFormComponent},
  {path:'task-listing',component:TaskListingComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
