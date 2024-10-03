import { Component, Output,EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
@Output() addtask=new EventEmitter();
userForm !:FormGroup;
 constructor(private fb:FormBuilder){
  this.userForm=this.fb.group({
  title: ['', Validators.required],
  des:  ['',Validators.required]
  
 });

}
display(){
  console.log(this.userForm.value);
  this.addtask.emit(this.userForm.value);
}

}
