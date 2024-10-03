import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_forms';
 

url: string="http://localhost:5238/api/emps";
myPostData!:any;
constructor (private http:HttpClient){
  this.http.get(this.url).subscribe((data)=>{
    this.myPostData=data;
  });

}
sendData(){
  var post ="http://localhost:5238/api/emps";
  var datatosend={
    role:"my Custom title",
    name:"hello World",
    salary:2000,
  }
  this.http.post(post,datatosend).subscribe((res)=>{

console.log(res);
  });

  
}

}
