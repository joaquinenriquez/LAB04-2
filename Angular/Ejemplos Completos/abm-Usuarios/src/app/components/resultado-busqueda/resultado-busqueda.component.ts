import { Component, OnInit, Input } from '@angular/core';
import { IPelicula } from 'src/app/models/IPelicula.model';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  @Input() peliculaEncontrada: IPelicula;

  constructor() { }

  ngOnInit() {
  }

}
