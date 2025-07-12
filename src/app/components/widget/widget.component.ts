import { Component, input, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetOptionsComponent } from '../widget/widget-options.component/widget-options.component';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet, MatButtonModule, MatIcon, WidgetOptionsComponent],
  templateUrl: './widget.html',
  styleUrl: './widget.css',
  host: {
    '[style.gridArea]': '"span " + (data().rows ?? 1) + " / span " + (data().cols ?? 1)',
  }
})
export class WidgetComponent {
  data = input.required<Widget>();

  showOptions = signal(false);
}
