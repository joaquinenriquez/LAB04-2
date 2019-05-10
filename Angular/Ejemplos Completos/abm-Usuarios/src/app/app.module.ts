import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrillaComponent } from './components/grilla/grilla.component';

import { Routes, RouterModule } from '@angular/router';

// Importamos HttpModule
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioService } from './services/pelicula.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { AltaComponent } from './components/alta/alta.component';
import { HttpBaseService } from './services/http-base.service';
import { Boton1Component } from './components/boton1/boton1.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { MenuComponent } from './components/menu/menu.component';

const rutas: Routes = [

  { path: 'peliculas', component: MainComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'peliculas/alta', component: AltaComponent },
  { path: 'actor/alta', component: AltaComponent },
  { path: 'actor/listado', component: AltaComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    NavbarComponent,
    MainComponent,
    AltaComponent,
    Boton1Component,
    BusquedaComponent,
    ResultadoBusquedaComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas)

  ],
  providers: [HttpBaseService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
