import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DashboardComponents from './pages/dashboard/dashboard.components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Dashboard';
}
