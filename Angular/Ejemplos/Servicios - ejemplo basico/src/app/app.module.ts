import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ejemplo1Service } from './services/ejemplo1.service';

import { AppComponent } from './app.component';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Ejemplo1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
