import { Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard';
import { SaldoComponent } from '../pages/dashboard/widgets/saldo/saldo';
import { DespesasComponent } from '../pages/dashboard/widgets/despesas/despesas.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Saldo',
      content: SaldoComponent
    },
    {
      id: 2,
      label: 'Despesas',
      content: DespesasComponent
    }
  ]);

  constructor() { }
}
