import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { Routes, RouterModule } from '@angular/router';
import { SentencePipe } from '../../shared/pipes/sentence.pipe';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, SentencePipe],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css',
})
export class SideNavigationComponent {
  challengeRoutes: Routes = routes;
}
