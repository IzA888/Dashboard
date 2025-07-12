import { Component, inject, ViewChild } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule, MatSidenav } from "@angular/material/sidenav";


@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule],
  providers: [DashboardService],
  templateUrl: './dashboard.components.html',
  styleUrl: './dashboard.components.css'
})
export default class DashboardComponents {
  @ViewChild('sidenav') sidenav!: MatSidenav;


  store = inject(DashboardService);
  
}
