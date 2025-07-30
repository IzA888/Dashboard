import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DashboardService } from '../../services/dashboard.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.css'
})
export default class CustomSidenavComponent {

}
