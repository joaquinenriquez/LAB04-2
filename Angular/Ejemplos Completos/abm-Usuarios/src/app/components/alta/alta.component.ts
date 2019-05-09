import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IEntidad } from 'src/app/models/ientidad.model';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  modificar: boolean = false;
  unaEntidad: IEntidad;

  @Output() Agregado = new EventEmitter<IEntidad>();
  @Output() Modificado = new EventEmitter<IEntidad>();

  userForm = new FormGroup({
    id: new FormControl(''),
    campo1: new FormControl(''),
    campo2: new FormControl(''),
    campo3: new FormControl(''),
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

  onModificar(unaEntidad: IEntidad){
    this.modificar = true;
    this.userForm.setValue({
      id: unaEntidad.id,
      campo1: unaEntidad.campo1,
      campo2: unaEntidad.campo2,
      campo3: unaEntidad.campo3
    });
  }

  constructor(private miUsuarioService: UsuarioService) { }



  ngOnInit() {

  }


}
