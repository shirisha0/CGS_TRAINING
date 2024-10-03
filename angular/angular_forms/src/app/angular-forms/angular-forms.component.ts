import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']

})
export class AngularFormsComponent {


apiUrl = 'http://localhost:5238/api/emps'; // Replace with your actual API endpoint
  newUser = {
    id: 0,
    role: '',
    name: '',
    salary: 0
  };

  constructor(private http: HttpClient) {}

  addUser() {
    this.http.post(this.apiUrl, this.newUser, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      response => {
        console.log('User added successfully:', response);
        // Optionally, reset the form or handle success response
        this.newUser = { id: 0, role: '', name: '', salary: 0 };
      },
      error => {
        console.error('There was an error adding the user!', error);
      }
    );
  }
}
