import { Component, OnInit } from '@angular/core';
import { Ejemplo1Service } from 'src/app/services/ejemplo1.service';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  constructor(public miEjemplo1Service: Ejemplo1Service) {
  }

  ngOnInit() {
    console.log(this.miEjemplo1Service.miAtributo); // Usando los datos de nuesto servicio
  }

}
