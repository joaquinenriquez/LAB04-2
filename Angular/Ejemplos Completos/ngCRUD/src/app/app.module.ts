import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//Para trabajar con formularios
import { FormsModule } from '@angular/forms';
import { EmpleadoManagerComponent } from './components/empleado-manager/empleado-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
