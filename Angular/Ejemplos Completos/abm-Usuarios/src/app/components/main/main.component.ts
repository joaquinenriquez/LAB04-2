import { Component, OnInit, ViewChild } from '@angular/core';
import { IEntidad } from 'src/app/models/ientidad.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AltaComponent } from '../alta/alta.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listadoEntidades: IEntidad[];
  @ViewChild('formularioAlta') formularioAlta: AltaComponent;

  constructor(private miHttp: UsuarioService) { }

  ngOnInit() {
    this.traerDatos();
  }

  public traerDatos() {
    this.miHttp.TraerTodos().subscribe(
      datos => {
        console.log(datos);
        this.listadoEntidades = datos;
      },
      error => {
        console.log(error);
      });
  }

  public cargarUno(unaEntidad: IEntidad) {

    this.miHttp.CargarUno(unaEntidad)
      .then(
        response => {
          console.log(response);
          this.listadoEntidades.push(unaEntidad);
        }
      )
      .catch(
        error => {
          console.error(error);
        }
      );
    console.log(unaEntidad);
  }

  public onModificar(unaEntidad: IEntidad) {
    this.formularioAlta.onModificar(unaEntidad);
  }

  public onEliminar(unaEntidad: IEntidad) {
    console.log('eliminar');
  }

  public onModificado(unaEntidad: IEntidad) {
    let indice: number;
    console.log("Modificar");
    console.log(unaEntidad);
    this.miHttp.Modificar(unaEntidad)
      .then(
        response => {
          for (let i = 0; i < this.listadoEntidades.length; i++) {
            if (this.listadoEntidades[i].id == unaEntidad.id) {
              indice = i;
              break;
            }
          }
          unaEntidad.estado = true;
          this.listadoEntidades[indice] = unaEntidad;
          console.log(response);
        }
      )
      .catch(
        error => {
          console.error(error);
        }
      );



  }

}
