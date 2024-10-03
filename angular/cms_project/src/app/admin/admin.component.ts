import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit {
  
  constructor() {
    Chart.register(...registerables); // Register Chart.js components
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const canvasElement = document.getElementById('myChart') as HTMLCanvasElement;

    // Check if the canvas element exists
    if (canvasElement) {
        const ctx = canvasElement.getContext('2d');
        if (ctx) { // Ensure the context is not null
            const myChart = new Chart(ctx, {
                type: 'bar', // Specify the chart type
                data: {
                    labels: ['Total Policies', 'Total Audits', 'Total Reports', 'Registered Users'], // X-axis labels
                    datasets: [{
                        label: 'Statistics', // Legend label
                        data: [45, 12, 27, 120], // Data points corresponding to each label
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1 // Border width for each bar
                    }]
                },
                options: {
                    responsive: false, // Disable responsive behavior
                    scales: {
                        y: {
                            beginAtZero: true // Start the y-axis at zero
                        }
                    },
                    plugins: {
                        legend: {
                            display: true // Show the legend
                        },
                        tooltip: {
                            enabled: true // Enable tooltips
                        }
                    }
                }
            });
        } else {
            console.error("Unable to get canvas context.");
        }
    } else {
        console.error("Canvas element not found.");
    }
  }}
