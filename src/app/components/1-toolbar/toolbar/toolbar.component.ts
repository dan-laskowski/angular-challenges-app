import { Component, Input } from '@angular/core';
import HomeLink from '../../../shared/interfaces/homeLinks';
import { homeLinks } from '../../../shared/data/homeLinks';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
})
export class ToolbarComponent {
  @Input() title: string = '';

  links: HomeLink[] = homeLinks;
}
