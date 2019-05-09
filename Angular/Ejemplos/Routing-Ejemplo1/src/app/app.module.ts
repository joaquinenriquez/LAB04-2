import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Primer paso importamos el tipo Routes y el modulo del sistema de Routiing RouterModule
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

// Segundo paso creamos las rutas
const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    // Tercer paso Importamamos RouterModule y le pasamos las rutas
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }


