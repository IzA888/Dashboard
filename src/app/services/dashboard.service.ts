import { computed, Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard';
import { SaldoComponent } from '../pages/dashboard/widgets/saldo/saldo';
import { DespesasComponent } from '../pages/dashboard/widgets/despesas/despesas.component';
import { ReceitaComponent } from '../pages/dashboard/widgets/receita/receita.components';

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
    },
    {
      id: 3,
      label: 'Receita',
      content: ReceitaComponent
    },
  ]);

  addedWidgets = signal<Widget[]>([]);

  WidgetstoAdd = computed(() => {
    const addIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter((w) => !addIds.includes(w.id));  
  });

  addWidget(w: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), {...w}]);
  }

  constructor() { }
}
