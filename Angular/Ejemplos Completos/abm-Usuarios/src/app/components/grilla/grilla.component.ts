import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/pelicula.service';
import { IPelicula } from 'src/app/models/IPelicula.model';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  /* #region  Atributos */

  @Input() listadoEntidades: IPelicula[];
  @Output() onModificar = new EventEmitter<IPelicula>();
  @Output() onEliminar = new EventEmitter<IPelicula>();

  /* #endregion */

  constructor(private servicioUsuarios: UsuarioService) { }

  ngOnInit() {
  }

  eliminar(unaEntidad: IPelicula){
    let confirmar = confirm('Estas seguro?');
    if (confirmar === true) {
      this.onEliminar.emit(unaEntidad);
    }
   }

   modificar(unaEntidad: IPelicula, indice: number) {
     console.log('En la grilla');
     console.log(unaEntidad);
     this.onModificar.emit(unaEntidad);
   }

}
