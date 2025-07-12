import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatSidenavContainer, MatSidenav, MatSidenavContent, MatButtonModule, MatIcon],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.css'
})
export default class CustomSidenavComponent {
  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

}
