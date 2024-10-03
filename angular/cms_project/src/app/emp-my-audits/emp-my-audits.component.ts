import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Audit {
  auditName: string;
  department: string;
  dateScheduled: string;
  status?: string;  // Optional if it exists in your data
}

@Component({
  selector: 'app-emp-my-audits',
  templateUrl: './emp-my-audits.component.html',
  styleUrls: ['./emp-my-audits.component.css']
})
export class EmpMyAuditsComponent implements OnInit {
  searchTerm: string = '';
  filterStatus: string = 'all';
  audits: Audit[] = [];
  filteredAudits: Audit[] = [];

  // Inject the HttpClient service
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAudits();  // Fetch data when the component loads
  }

  // Fetch audits from API
  getAudits() {
    this.http.get<Audit[]>('http://localhost:5159/api/audits')
      .subscribe(data => {
        this.audits = data;
        this.filteredAudits = data;  // Ensure filteredAudits is populated
        console.log(this.audits);  // Check data structure in the console
      });
  }
}
