import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardformatPipe } from '../../../shared/pipes/cardformat.pipe';

@Component({
  selector: 'app-formatter',
  standalone: true,
  imports: [CommonModule, FormsModule, CardformatPipe],
  templateUrl: './formatter.component.html',
  styleUrl: './formatter.component.css',
})
export class FormatterComponent {
  cardNumber: string = '';
}
