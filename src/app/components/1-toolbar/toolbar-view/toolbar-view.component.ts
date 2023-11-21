import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ToolbarLinkComponent } from '../toolbar-link/toolbar-link.component';
import HomeLink from '../../../shared/interfaces/homeLinks';
import { homeLinks } from '../../../shared/data/homeLinks';

@Component({
  selector: 'app-toolbar-view',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, ToolbarLinkComponent],
  templateUrl: './toolbar-view.component.html',
  styleUrl: './toolbar-view.component.css',
})
export class ToolbarViewComponent {
  links: HomeLink[] = homeLinks;
}
