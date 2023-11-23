import { Routes } from '@angular/router';
import { ToolbarViewComponent } from './components/1-toolbar/toolbar-view/toolbar-view.component';
import { CardViewComponent } from './components/2-card/card-view/card-view.component';
import { AccordionViewComponent } from './components/3-accordion/accordion-view/accordion-view.component';
import { FormatterViewComponent } from './components/4-formatter/formatter-view/formatter-view.component';
import { RatingViewComponent } from './components/5-stars/rating-view/rating-view.component';
import { SortViewComponent } from './components/6-sort/sort-view/sort-view.component';
import { FormComponent } from './components/7-form/form/form.component';
import { FormGuard } from './shared/guards/form.guard';
import { BottomSheetComponent } from './components/8-bottomsheet/bottom-sheet/bottom-sheet.component';
import { LoaderViewComponent } from './components/9-loader/loader-view/loader-view.component';
import { PopupViewComponent } from './components/10-popup/popup-view/popup-view.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'challenge-1',
    component: ToolbarViewComponent,
  },
  {
    path: 'challenge-2',
    component: CardViewComponent,
  },
  {
    path: 'challenge-3',
    component: AccordionViewComponent,
  },
  {
    path: 'challenge-4',
    component: FormatterViewComponent,
  },
  {
    path: 'challenge-5',
    component: RatingViewComponent,
  },
  {
    path: 'challenge-6',
    component: SortViewComponent,
  },
  {
    path: 'challenge-7',
    component: FormComponent,
    canDeactivate: [FormGuard],
  },
  {
    path: 'challenge-8',
    component: BottomSheetComponent,
  },
  {
    path: 'challenge-9',
    component: LoaderViewComponent,
  },
  {
    path: 'challenge-10',
    component: PopupViewComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
