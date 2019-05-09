import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Primer paso
Una vez creado el servicio agregamos la declaración del mismo en algun módulo,
en este caso lo vamos a hacer en appModulo.
Lo hacemos haciendo un import de la clase del servicio desde el archivo (su ruta)
del servicio sin la extension .ts
*/
import { MiHttpService } from './services/mi-http.service';

// Segundo paso: importamos HttpModule
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent
  ],
  imports: [
    BrowserModule,
    // Tercer paso: agregamos HttpModule en los imports
    HttpModule
  ],
  providers: [
    // Cuarto paso: agregamos el servicio al array de providers
    MiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
