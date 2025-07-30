import { Component, ElementRef, inject, ViewChild, OnInit } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule, MatSidenav } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';

import { wrapGrid } from 'animate-css-grid';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSidenavModule,
    MatToolbarModule,
    ],
  providers: [DashboardService],
  templateUrl: './dashboard.components.html',
  styleUrl: './dashboard.components.css',
})
export default class DashboardComponents{
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('dashboardwidgets') dashboardwidgets!: ElementRef;


  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  store = inject(DashboardService);


  ngAfterViewInit() {
    wrapGrid(this.dashboardwidgets.nativeElement, { duration: 400 });
  }
  
}
