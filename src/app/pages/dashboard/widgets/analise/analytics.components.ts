import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-analytics',
  imports: [MatButtonModule],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class AnalyticsComponent {
  @ViewChild('chart') chart!: ElementRef;


  ngAfterViewInit() {
    new Chart(this.chart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
          {
            label: 'Analytics',
            data: [100, 110, 120, 130],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
            fill:'start',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4,
          },
        },
      },
    })
  }
}


