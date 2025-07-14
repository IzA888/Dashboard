import { computed, effect, Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard';
import { SaldoComponent } from '../pages/dashboard/widgets/saldo/saldo';
import { DespesasComponent } from '../pages/dashboard/widgets/despesas/despesas.component';
import { ReceitaComponent } from '../pages/dashboard/widgets/receita/receita.components';
import { AnalyticsComponent } from '../pages/dashboard/widgets/analytics/analytics.components';


@Injectable({
  providedIn: 'root'
})

/**
 * Service responsible for managing dashboard widgets, including their addition, removal, update, and ordering.
 * 
 * This service maintains two main signals:
 * - `widgets`: The list of all available widgets that can be added to the dashboard.
 * - `addedWidgets`: The list of widgets currently added to the user's dashboard.
 * 
 * It provides methods to:
 * - Add a widget to the dashboard (`addWidget`)
 * - Update properties of an added widget (`updateWidget`)
 * - Move widgets left or right in the dashboard order (`moveWidgetToLeft`, `moveWidgetToRight`)
 * - Remove a widget from the dashboard (`removeWidget`)
 * 
 * The `WidgetstoAdd` computed property returns the list of widgets that are available to be added (i.e., not already present in `addedWidgets`).
 * 
 * @example
 * // Add a widget to the dashboard
 * dashboardService.addWidget(widget);
 * 
 * // Move a widget to the right
 * dashboardService.moveWidgetToRight(widgetId);
 * 
 * // Remove a widget from the dashboard
 * dashboardService.removeWidget(widgetId);
 */

/**
 * @description
 * A computed property that returns the list of widgets that can still be added to the dashboard.
 * It filters out widgets that are already present in `addedWidgets`.
 * 
 * Exemplo: Se o usuário já adicionou o widget de "Saldo", ele não aparecerá mais na lista de widgets disponíveis para adicionar.
 */
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Saldo',
      content: SaldoComponent,
      rows: 1,
      cols: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 2,
      label: 'Despesas',
      content: DespesasComponent,
      rows: 1,
      cols: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 3,
      label: 'Receita',
      content: ReceitaComponent,
      rows: 1,
      cols: 1,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
        {
      id: 4,
      label: 'Analytics',
      content: AnalyticsComponent,
      rows: 2,
      cols: 2,
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
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      this.addedWidgets.set(newWidgets);
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if (index === this.addedWidgets().length - 1){
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [{ ...newWidgets[index + 1] }, { ...newWidgets[index]}]
    
    this.addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
     const index = this.addedWidgets().findIndex(w => w.id === id);
    if (index === 0){
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [{ ...newWidgets[index - 1] }, { ...newWidgets[index]}]
    
    this.addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter(w => w.id !== id));
  }

  fetchWidgets() {
    if (typeof localStorage !== 'undefined') {
      const widgetsAsString = localStorage.getItem('dahsboardWidgets');
      if(widgetsAsString) {
        const widgets = JSON.parse(widgetsAsString) as Widget[];
        widgets.forEach(widget => {
          const content = this.widgets().find(w => w.id === widget.id)?.content;
          if (content) {
            widget.content = content;
          }
        });

        this.addedWidgets.set(widgets);
      }
    }
  }

  constructor() {
    this.fetchWidgets();
  }
   

  saveWidgets = effect(() => {
    const widgetsWithoutContent: Partial<Widget>[] = this.addedWidgets().map(w => ({ ...w }));
    widgetsWithoutContent.forEach(w => {
      delete w.content;
    });

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('dashboardWidgets', JSON.stringify(widgetsWithoutContent));
    }
  })

}
