import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-bottom-sheet-view',
  standalone: true,
  imports: [CommonModule, BottomSheetComponent],
  templateUrl: './bottom-sheet-view.component.html',
  styleUrl: './bottom-sheet-view.component.css',
})
export class BottomSheetViewComponent {}
