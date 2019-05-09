import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valores = '';

  Guardar($event) {
    console.log($event);
  }

  PresionoUnaTecla($event: any) {
    this.valores += $event.target.value + ' | ';
  }

}
