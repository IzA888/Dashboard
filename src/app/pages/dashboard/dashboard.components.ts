import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-dashoard.components',
  imports: [WidgetComponent, MatButtonModule, MatIconModule, MatMenuModule],
  providers: [DashboardService],
  templateUrl: './dashboard.components.html',
  styleUrl: './dashboard.components.css'
})
export default class DashboardComponents {

  store = inject(DashboardService);
  
}
