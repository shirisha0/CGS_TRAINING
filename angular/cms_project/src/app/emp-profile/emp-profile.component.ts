import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  employees: any[] = []; // This will hold the list of employees

  private apiUrl = 'http://localhost:5159/api/registers'; // Your API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployees(); // Call the method to fetch employee data on initialization
  }

  // Fetch employee data from the API
  fetchEmployees(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      data => {
        this.employees = data;
        console.log(this.employees)
       // Assign the fetched data to the employees variable
      },
      error => {
        console.error('Error fetching employee data', error); // Handle error
      }
    );
  }
}