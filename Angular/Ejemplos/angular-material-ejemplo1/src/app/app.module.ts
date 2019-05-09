import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ComandasComponent } from './components/comandas/comandas.component';
import { RenglonComandasComponent } from './components/comandas/renglon-comandas/renglon-comandas.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    ComandasComponent,
    RenglonComandasComponent,
    MainMenuComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
