import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-manager',
  templateUrl: './empleado-manager.component.html',
  styleUrls: ['./empleado-manager.component.css']
})


export class EmpleadoManagerComponent implements OnInit {


  constructor() {

  }

  //#region Atributos

  titulo = 'CRUD Angular';

  modelo: any = {};
  modelo2: any = {};

  empleadoAEditar: number;
  ocultarEditar = true;

  mensaje: string;

  empleados = [
    {nombre: 'Juan', cargo: 'encargado', email: 'asd@gmail.com'},
    {nombre: 'Juan2', cargo: 'encargado2', email: 'asasds@hotmail.com'},
    {nombre: 'Juan4', cargo: 'encargado4', email: 'dsdsada@qassad.com'}
  ];

  //#endregion

  ngOnInit() {
  }

  //#region Métodos

  agregarEmpleado(): void {
    this.empleados.push(this.modelo);
    this.mensaje = 'Usuario agregado!';
  }

  borrarEmpleado(i): void {
    const confirmacionBorrado: boolean = confirm('Esta seguro que lo quiere eliminar?');
    if (confirmacionBorrado === true) {
      this.empleados.splice(i, 1);
      this.mensaje = 'Usuario eliminado';
    }
  }

  editarEmpleado(i): void {
    // Cargamos los datos en el cuadro de edcion
    this.modelo2.nombre = this.empleados[i].nombre;
    this.modelo2.cargo = this.empleados[i].cargo;
    this.modelo2.email = this.empleados[i].email;
    // Guardamos la posicion del empleado a editar para que luego lo utilice el metodo actualizar
    this.empleadoAEditar = i;
    // Mostramos la ventana de edicion
    this.ocultarEditar = false;
  }

  actualizarEmpleado(): void {
    // Reemplaza el empleado de la posicion i por el que nos cargaron en el formulario de edicion (modelo2)
    this.empleados[this.empleadoAEditar] = this.modelo2;
    // Limpiamos el formulario de edicion
    this.modelo2 = {};
    this.mensaje = 'Usuario actualizado';
    // Ocultamos la ventana de edicion
    this.ocultarEditar = true;
  }

  cerrarAlerta(): void {
    this.mensaje = '';
  }

  //#endregion

}
