import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatterComponent } from '../formatter/formatter.component';

@Component({
  selector: 'app-formatter-view',
  standalone: true,
  imports: [CommonModule, FormatterComponent],
  templateUrl: './formatter-view.component.html',
  styleUrl: './formatter-view.component.css',
})
export class FormatterViewComponent {}
