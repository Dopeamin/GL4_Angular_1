import { Routes } from '@angular/router';
import { ColorComponent } from 'src/app/color/color.component';
import { CvComponent } from 'src/app/cv/cv.component';

export const ROUTES: Routes = [
  { path: '', component: CvComponent },
  { path: 'color', component: ColorComponent },
];

export const ROUTESLABELS: { path: string; label: string }[] = [
  { path: ROUTES[0].path!, label: 'CV' },
  { path: ROUTES[1].path!, label: 'COLOR' },
];
