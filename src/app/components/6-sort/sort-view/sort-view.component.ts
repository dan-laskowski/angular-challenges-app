import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from '../../../shared/pipes/sort.pipe';

@Component({
  selector: 'app-sort-view',
  standalone: true,
  imports: [CommonModule, SortPipe],
  templateUrl: './sort-view.component.html',
  styleUrl: './sort-view.component.css',
})
export class SortViewComponent {
  arrayToSort = ['eggplant', 'cucumber', 'potato', 'tomato', 'lettuce'];
  // arrayToSort = 1;

  isArray: boolean = Array.isArray(this.arrayToSort);
}
