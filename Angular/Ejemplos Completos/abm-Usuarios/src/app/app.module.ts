import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrillaComponent } from './components/grilla/grilla.component';

// Importamos HttpModule
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioService } from './services/usuario.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { AltaComponent } from './components/alta/alta.component';
import { HttpBaseService } from './services/http-base.service';


@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    NavbarComponent,
    MainComponent,
    AltaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [HttpBaseService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
