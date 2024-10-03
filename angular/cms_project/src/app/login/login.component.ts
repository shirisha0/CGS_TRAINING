import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';// Import Router service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  details = {
    name: '',
    pass: '',
    role: '' // Role can be admin or employee
  };

 constructor(private router: Router) { }

  disfun(myForm: NgForm) {
    console.log('Login details:', this.details);

    // Logic to check the user's role
    if (this.details.role === 'admin') {
      // Navigate to Admin page
      this.router.navigate(['/admin']);
    } else if (this.details.role === 'employee') {
      // Navigate to Employee page
      this.router.navigate(['/employee']);
    } else {
      alert('Invalid role selected');
    }
  }
}
