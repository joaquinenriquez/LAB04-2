import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPelicula } from 'src/app/models/IPelicula.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @Input() listadoPeliculas: IPelicula[];
// tslint:disable-next-line: no-output-on-prefix
  @Output() onPeliculaEncontrada = new EventEmitter<IPelicula>();

  titulo: string;

  buscar() {
    let encontrado = false;

    this.listadoPeliculas.forEach(unaPelicula => {
      if (unaPelicula.nombre === this.titulo) {
        console.log('encontrodo!!');
        encontrado = true;
        this.onPeliculaEncontrada.emit(unaPelicula);
      }
    });

    if (!encontrado) {
      let unaPeliculaNoEncontrada = {} as IPelicula;
      unaPeliculaNoEncontrada.nombre = "No encontrada";
      this.onPeliculaEncontrada.emit(unaPeliculaNoEncontrada);
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
