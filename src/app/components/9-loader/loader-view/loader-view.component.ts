import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderState, LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-loader-view',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './loader-view.component.html',
  styleUrl: './loader-view.component.css',
})
export class LoaderViewComponent implements OnInit {
  loaderState: LoaderState = LoaderState.isLoading;
  spinnerText: string = 'konfiguracja narzędzi...';
  spinnerIcon: string = '../assets/gear.svg';

  public LOADER_STATE = LoaderState;

  ngOnInit() {
    setTimeout(() => {
      this.loaderState = LoaderState.isReady;
    }, 6000);
  }
}
