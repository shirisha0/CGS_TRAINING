import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-compliance-policies',
  templateUrl: './admin-compliance-policies.component.html',
  styleUrls: ['./admin-compliance-policies.component.css']
})
export class AdminCompliancePoliciesComponent implements OnInit {
  // New policy data to be added
  newPolicy = { name: '', description: '' };

  // Array to store policies
  policies: { name: string, description: string, dateCreated: string }[] = [];

  // API URL
  private apiUrl = 'http://localhost:5159/api/add_policy';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch the existing policies when the component is initialized
    this.fetchPolicies();
  }

  // Method to fetch policies from the API
  fetchPolicies() {
    this.http.get<{ policy_name: string, dec: string }[]>(this.apiUrl).subscribe((data: any[]) => {
      // Assuming the API returns an array of policies, map them to the expected format
      this.policies = data.map(policy => ({
        name: policy.policy_name,
        description: policy.dec,
        dateCreated: new Date().toISOString().split('T')[0] // placeholder for now
      }));
    }, error => {
      console.error('Error fetching policies:', error);
    });
  }

  // Method to add a new policy
  addPolicy() {
    if (!this.newPolicy.name || !this.newPolicy.description) {
      console.error('Both Policy Name and Description are required!');
      return;
    }

    const policyData = {
      policy_name: this.newPolicy.name,
      dec: this.newPolicy.description
    };

    // Post the new policy to the API
    this.http.post(this.apiUrl, policyData).subscribe(response => {
      console.log('Policy added successfully!', response);

      // Add the new policy to the list
      this.policies.push({
        name: this.newPolicy.name,
        description: this.newPolicy.description,
        dateCreated: new Date().toISOString().split('T')[0]
      });

      // Reset the form fields
      this.newPolicy = { name: '', description: '' };
    }, error => {
      console.error('Error adding policy:', error);
    });
  }

  // Method to delete a policy from the list
  deletePolicy(policyIndex: number) {
    // This is client-side delete, if needed implement an API call to delete on the server
    this.policies.splice(policyIndex, 1);
  }
}
