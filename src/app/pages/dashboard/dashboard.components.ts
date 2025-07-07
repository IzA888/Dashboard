import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';


@Component({
  selector: 'app-dashoard.components',
  imports: [WidgetComponent],
  providers: [DashboardService],
  templateUrl: './dashboard.components.html',
  styleUrl: './dashboard.components.css'
})
export default class DashboardComponents {

  store =inject(DashboardService);
  
}
