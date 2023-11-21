import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-accordion-view',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './accordion-view.component.html',
  styleUrl: './accordion-view.component.css',
})
export class AccordionViewComponent {}
