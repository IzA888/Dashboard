import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { DashboardService } from '../../services/dashboard.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatSidenavContainer, MatSidenav, MatSidenavContent, MatButtonModule, MatIcon, MatMenuModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.css'
})
export default class CustomSidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;


  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  store = inject(DashboardService);
}
