import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Output-ejemplo';

  public miMetodoEnElPadre(mensaje) {
    alert('Soy el padre! Me llego esto desde un hijo: ' + mensaje);
  }


}
