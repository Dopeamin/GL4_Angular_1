import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'color', component: ColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
