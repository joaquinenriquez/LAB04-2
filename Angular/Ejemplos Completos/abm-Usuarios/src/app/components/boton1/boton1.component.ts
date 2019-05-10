import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton1',
  templateUrl: './boton1.component.html',
  styleUrls: ['./boton1.component.css']
})
export class Boton1Component implements OnInit {

  @Input() seleccion: number;
// tslint:disable-next-line: no-output-on-prefix
  @Output() onEliminar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  eliminar(){
    this.onEliminar.emit(this.seleccion);
    console.log(this.seleccion);
  }

}
