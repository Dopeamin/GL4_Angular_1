import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';

import { AppComponent } from './app.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CarteComponent } from './carte-visite/carte/carte.component';
import { FormComponent } from './carte-visite/form/form.component';

@NgModule({
  declarations: [AppComponent, CarteVisiteComponent, CarteComponent, FormComponent],
  imports: [
    BrowserModule,
    HeroIconModule.forRoot(
      {
        ...allIcons,
      },
      {
        defaultHostDisplay: 'inlineBlock', // default 'none'
        attachDefaultDimensionsIfNoneFound: true, // default 'false'
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
