import { Component, OnInit, ViewChild } from '@angular/core';
import { IPelicula } from 'src/app/models/IPelicula.model';
import { UsuarioService } from 'src/app/services/pelicula.service';
import { AltaComponent } from '../alta/alta.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listadoEntidades: IPelicula[];
  @ViewChild('formularioAlta') formularioAlta: AltaComponent;


  unaPeliculaEncontrada = {} as IPelicula;

  constructor(private miHttp: UsuarioService) {
    this.unaPeliculaEncontrada.nombre = 'Sin resultado';
  }

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

  public cargarUno(unaEntidad: IPelicula) {

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

  public onModificar(unaEntidad: IPelicula) {
    this.formularioAlta.onModificar(unaEntidad);
  }

  public onEliminar(id: number) {
    console.log('eliminar');
    let indice: number;

// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.listadoEntidades.length; i++){
      if (this.listadoEntidades[i].id === id) {
        this.listadoEntidades[i].estado = false;
        indice = i;
        break;
      }
    }

    this.miHttp.Modificar(this.listadoEntidades[indice])
      .then(
        response => {
                console.log(response);
            })
      .catch(
        error => {
          console.error(error);
        }
      );
  }

  peliculaEncontrada(pelicula: IPelicula){

    this.unaPeliculaEncontrada = pelicula;
    console.log("Encontrada");
  }

  public onModificado(unaEntidad: IPelicula) {
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
