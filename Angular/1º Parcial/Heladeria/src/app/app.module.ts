import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*
Importamos el servicio para poder utilizarlo en este modulo
(Angular-CLI no lo hace automaticamente) luego lo agregamos
como provider (mas abajo)
*/
import { MiHTTPService } from './services/mi-http.service';
import { PruebaComponent } from './components/prueba/prueba.component';

/*
Importamos HttpModule para poder utilizarlo
*/
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
                  // tslint:disable-next-line: deprecation
    HttpModule
  ],
  providers: [MiHTTPService, // Agregamos al servicio como provider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
