import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombreDePropiedadEnElComponentePadre = {
    nombre: 'Juan (Este valor esta en el componente padre)',
    edad: 20
  };
}
