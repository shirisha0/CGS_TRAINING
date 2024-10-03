import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder for Reactive Forms

@Component({
  selector: 'app-admin-audit-management',
  templateUrl: './admin-audit-management.component.html',
  styleUrls: ['./admin-audit-management.component.css']
})
export class AdminAuditManagementComponent implements OnInit {

  audits: any[] = []; // Store audits fetched from the API
  auditForm: FormGroup; // FormGroup for the form
  apiUrl = 'http://localhost:5159/api/audits'; // Your API endpoint

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Initialize the form using FormBuilder
    this.auditForm = this.fb.group({
      auditName: ['', Validators.required],
      department: ['', Validators.required],
      auditDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Fetch audits when the component loads
    this.getAudits();
  }

  // Method to fetch audits from the API
  getAudits() {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      this.audits = data; // Assign the fetched audits to the component
    }, error => {
      console.error('Error fetching audits:', error);
    });
  }

  // Method to post audit data to the API
  submitAudit() {
    if (this.auditForm.valid) {
      const auditData = {
        auditname: this.auditForm.get('auditName')?.value,
        department: this.auditForm.get('department')?.value,
        dataSechuled: this.auditForm.get('auditDate')?.value
      };

      // Post the data to the API
      this.http.post(this.apiUrl, auditData).subscribe(response => {
        console.log('Audit successfully scheduled:', response);
        this.getAudits(); // Refresh the list of audits after submission
        this.auditForm.reset(); // Reset the form
      }, error => {
        console.error('Error scheduling audit:', error);
      });
    }
  }
}
