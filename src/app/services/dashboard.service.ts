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
      content: SaldoComponent,
      rows: 2,
      cols: 2
    },
    {
      id: 2,
      label: 'Despesas',
      content: DespesasComponent,
      rows: 1,
      cols: 1
    },
    {
      id: 3,
      label: 'Receita',
      content: ReceitaComponent,
      rows: 1,
      cols: 1
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

  updateWidget(id: number, widget: Partial<Widget>) {
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if (index !== -1) {
      const newdWidgets = [...this.addedWidgets()];
      newdWidgets[index] = { ...newdWidgets[index], ...widget };
      this.addedWidgets.set(newdWidgets);
    }
  }

  constructor() { }
}
