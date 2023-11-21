import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() body: string = '';

  isBodyVisible: boolean = false;

  switchBodyVisibility() {
    this.isBodyVisible = !this.isBodyVisible;
  }
}
