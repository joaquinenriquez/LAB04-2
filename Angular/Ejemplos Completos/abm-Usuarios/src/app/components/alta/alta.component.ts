import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/pelicula.service';
import { IPelicula } from 'src/app/models/IPelicula.model';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  modificar: boolean = false;
  unaEntidad: IPelicula;

  @Output() Agregado = new EventEmitter<IPelicula>();
  @Output() Modificado = new EventEmitter<IPelicula>();

  userForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    tipo: new FormControl(''),
    fechaEstreno: new FormControl(''),
  });

  onSubmit() {
    if (this.modificar == false) {
      this.unaEntidad = this.userForm.value;
      this.unaEntidad.estado = true;
      this.Agregado.emit(this.unaEntidad);
      this.userForm.reset();
    } else {
      this.unaEntidad = this.userForm.value;
      this.unaEntidad.estado = true;
      this.Modificado.emit(this.unaEntidad);
      this.userForm.reset();
    }

  }

  onModificar(unaEntidad: IPelicula){
    this.modificar = true;
    this.userForm.setValue({
      id: unaEntidad.id,
      nombre: unaEntidad.nombre,
      tipo: unaEntidad.tipo,
      fechaEstreno: unaEntidad.fechaEstreno
    });
  }

  constructor(private miUsuarioService: UsuarioService) { }



  ngOnInit() {

  }


}
