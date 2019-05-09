import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
