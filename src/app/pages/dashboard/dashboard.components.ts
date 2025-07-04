import { Component } from '@angular/core';
import { Widget } from '../../components/widget/widget';
import { Saldo } from './widgets/saldo/saldo';

@Component({
  selector: 'app-dashoard.components',
  imports: [Widget],
  templateUrl: './dashboard.components.html',
  styleUrl: './dashboard.components.css'
})
export class DashboardComponents {

  data: Widget ={
    id: 1,
    label: 'Saldo',
    content: Saldo
  }
}
