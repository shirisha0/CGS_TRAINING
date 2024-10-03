import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router   // Inject the Router service
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      state: ['', Validators.required],
      role: ['User', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      // Make the HTTP POST request to your API
      this.http.post('http://localhost:5159/api/registers', formData).subscribe(
        response => {
          console.log('Registration successful!', response);
          
          // Reset the form after successful submission
          this.registrationForm.reset();
          
          // Optionally, you can set the role back to "User" (default)
          this.registrationForm.patchValue({ role: 'User' });
          
          // Navigate to the login page after successful registration
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration failed!', error);
        }
      );
    }
  }
}