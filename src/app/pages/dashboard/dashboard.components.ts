import { Component, ElementRef, inject, ViewChild, OnInit } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule, MatSidenav } from "@angular/material/sidenav";
import CustomSidenavComponent from '../../components/custom-sidenav/custom-sidenav.component';
import { wrapGrid } from 'animate-css-grid';


@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent, CustomSidenavComponent, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule],
  providers: [DashboardService],
  templateUrl: './dashboard.components.html',
  styleUrl: './dashboard.components.css'
})
export default class DashboardComponents{
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('dashboardwidgets') dashboardwidgets!: ElementRef;

  store = inject(DashboardService);


  ngAfterViewInit() {
    wrapGrid(this.dashboardwidgets.nativeElement, { duration: 400 });
  }
  
}
