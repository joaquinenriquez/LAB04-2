import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclas',
  templateUrl: './teclas.component.html',
  styleUrls: ['./teclas.component.css']
})
export class TeclasComponent {

  PresionoUnaTecla(e) {
    if (e.keyCode === 13) {
      console.log("Se presiono enter");
    }
  }

  PresionoOtraTecla(){
    console.log("Se presiono enter 2");
  }
 
}
