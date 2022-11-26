import { Routes } from '@angular/router';
import { ColorComponent } from 'src/app/color/color.component';
import { CvDetailsComponent } from 'src/app/cv/cv-details/cv-details.component';
import { CvComponent } from 'src/app/cv/cv.component';

export const ROUTES: Routes = [
  { path: '', component: CvComponent },
  { path: 'cv/details/:id', component: CvDetailsComponent },
  { path: 'color', component: ColorComponent },
];

export const ROUTESLABELS: { path: string; label: string }[] = [
  { path: ROUTES[0].path!, label: 'CV' },
  { path: ROUTES[2].path!, label: 'COLOR' },
  { path: ROUTES[1].path!, label: 'CV' },
];
