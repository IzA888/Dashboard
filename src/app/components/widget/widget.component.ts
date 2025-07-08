import { Component, input } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet, MatButtonModule, MatIcon],
  templateUrl: './widget.html',
  styleUrl: './widget.css'
})
export class WidgetComponent {
  data = input.required<Widget>();
}
