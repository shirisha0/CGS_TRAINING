import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  tasks:any[]=[];
  add_task(addtask:any){
    this.tasks.push(addtask)
  }

}
