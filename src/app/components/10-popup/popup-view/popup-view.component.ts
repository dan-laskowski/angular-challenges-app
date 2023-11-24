import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import {
  state,
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      opacity: 1,
      display: 'flex',
      visibility: 'visible',
    })
  ),
  state('close', style({ opacity: 0, display: 'none', visibility: 'hidden' })),
  transition('open => close', [animate('0.2s ease-out')]),
  transition('close => open', [animate('0.2s ease-in')]),
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './popup-view.component.html',
  styleUrls: ['./popup-view.component.css'],
  animations: [fadeInOut],
})
export class PopupViewComponent {
  title = '10-popup';

  isOpen: boolean = false;

  onOpenModal() {
    this.isOpen = true;
  }

  onCloseModal() {
    this.isOpen = false;
  }
}
