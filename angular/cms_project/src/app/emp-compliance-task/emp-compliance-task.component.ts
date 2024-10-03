import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  status: string;
}

@Component({
  selector: 'app-emp-compliance-task',
  templateUrl: './emp-compliance-task.component.html',
  styleUrls: ['./emp-compliance-task.component.css']
})
export class EmpComplianceTaskComponent implements OnInit {
  searchTerm: string = '';
  filterStatus: string = 'all';

  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  private apiUrl = 'http://localhost:5159/api/add_policy'; // Your API endpoint

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPolicies(); // Fetch policies when the component initializes
  }

  // Method to fetch policies from the API
  fetchPolicies() {
    this.http.get<{ policy_name: string; dec: string }[]>(this.apiUrl).subscribe(data => {
      // Map the API response to the tasks array
      this.tasks = data.map((policy, index) => ({
        id: index + 1, // Assuming id can be the index or you can set it differently
        name: policy.policy_name,
        description: policy.dec,
        dueDate: new Date().toISOString().split('T')[0], // Placeholder for dueDate; you can set it as needed
        status: 'Pending' // Assuming default status is 'Pending'; adjust as necessary
      }));

      this.filteredTasks = this.tasks; // Initialize filteredTasks
    }, error => {
      console.error('Error fetching policies:', error);
    });
  }

  applyFilters() {
    this.filteredTasks = this.tasks.filter(task => {
      const matchesSearch = task.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.filterStatus === 'all' || task.status.toLowerCase() === this.filterStatus.toLowerCase();
      return matchesSearch && matchesStatus;
    });
  }
}
