import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-view',
  standalone: true,
  imports: [CommonModule, RatingComponent, FormsModule],
  templateUrl: './rating-view.component.html',
  styleUrl: './rating-view.component.css',
})
export class RatingViewComponent {
  rating: number = 3.5;
}
