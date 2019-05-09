import { Component } from '@angular/core';

// Importamos empleado
import { Empleado } from './models/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* #region  Atributos */

  listaEmplados: Empleado[] = [
    { id: 1, nombre: 'Juan', pais: 'Argentina' },
    { id: 2, nombre: 'Pedro', pais: 'Argentina' }
  ];

  empleadoSeleccionado: Empleado = new Empleado();

  /* #endregion */

  /* #region  Méotodos  */

  public agregarOEditar() {

    // Para saber si estamos queriendo editar o guardar uno nuevo
    if (this.empleadoSeleccionado.id === 0) {
      this.empleadoSeleccionado.id = this.listaEmplados.length + 1;
      this.listaEmplados.push(this.empleadoSeleccionado);
    }

    this.empleadoSeleccionado = new Empleado();
  }

  public seleccionarParaEditar(unEmpleado: Empleado) {
    this.empleadoSeleccionado = unEmpleado;
  }

  public eliminar() {
    if (confirm('Esta seguro?') === true) {
      this.listaEmplados = this.listaEmplados.filter(x => x !== this.empleadoSeleccionado);
      this.empleadoSeleccionado = new Empleado();
    }

  }

  /* #endregion */

}
