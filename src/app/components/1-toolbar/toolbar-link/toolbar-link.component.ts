import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-link',
  templateUrl: './toolbar-link.component.html',
  styleUrls: ['./toolbar-link.component.css'],
  imports: [UpperCasePipe],
  standalone: true,
})
export class ToolbarLinkComponent {
  @Input() name: string = '';
  @Input() location: string = '#';
}
