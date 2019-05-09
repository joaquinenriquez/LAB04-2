import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IEntidad } from 'src/app/models/ientidad.model';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  /* #region  Atributos */

  @Input() listadoEntidades: IEntidad[];
  @Output() onModificar = new EventEmitter<IEntidad>();
  @Output() onEliminar = new EventEmitter<IEntidad>();

  /* #endregion */

  constructor(private servicioUsuarios: UsuarioService) { }

  ngOnInit() {
  }

  eliminar(unaEntidad: IEntidad){
    let confirmar = confirm("Estas seguro?");
    if (confirmar == true) {
      this.onEliminar.emit(unaEntidad)
    }
   }

   modificar(unaEntidad: IEntidad, indice: number) {
     console.log("En la grilla");
     console.log(unaEntidad);
     this.onModificar.emit(unaEntidad);
   }

}
