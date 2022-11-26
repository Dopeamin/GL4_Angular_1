import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';

import { AppComponent } from './app.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CarteComponent } from './carte-visite/carte/carte.component';
import { FormComponent } from './carte-visite/form/form.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvComponent } from './cv/cv.component';
import { ElementComponent } from './cv-list/element/element.component';
import { DefaultImage } from './default-image/default-image.pipe';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ColorComponent } from './color/color.component';
import { HighlightDirective } from './color/highlight.directive';
import { HeaderComponent } from './_shared/header/header.component';
import { RouterSimulator } from './_shared/router-simulator/router-simulator.component';
import { CvDetailsComponent } from './cv/cv-details/cv-details.component';
import { InputComponent } from './form/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteVisiteComponent,
    CarteComponent,
    FormComponent,
    CvListComponent,
    CvComponent,
    ElementComponent,
    DefaultImage,
    ColorComponent,
    HighlightDirective,
    HeaderComponent,
    RouterSimulator,
    CvDetailsComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HeroIconModule.forRoot(
      {
        ...allIcons,
      },
      {
        defaultHostDisplay: 'inlineBlock', // default 'none'
        attachDefaultDimensionsIfNoneFound: true, // default 'false'
      }
    ),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
