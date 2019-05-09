import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor';

  elementos: string[] =  [
    'Elemento1', 'Elemento2', 'Elemento3'
  ];


}
