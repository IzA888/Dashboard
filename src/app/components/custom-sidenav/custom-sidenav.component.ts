import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { f } from "../../../../node_modules/@angular/material/icon-module.d-COXCrhrh";

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatSidenavContainer, MatSidenav, MatSidenavContent, MatButtonModule, f],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.css'
})
export default class CustomSidenavComponent {
  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

}
