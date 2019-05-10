import { Injectable, OnInit } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { IPelicula } from '../models/IPelicula.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService implements OnInit  {

  constructor(private http: HttpBaseService) { }

  ngOnInit(): void {}

  public TraerTodos(): Observable<IPelicula[]> {
    return this.http.httpGetO<IPelicula[]>('/peliculas/');
  }

  public CargarUno(unaEntidad: IPelicula): Promise<Object> {
    return this.http.httpPostP('/peliculas/', unaEntidad);
  }

  public Modificar(unaEntidad: IPelicula): Promise<Object> {
    console.log('pelicula service');
    console.log(unaEntidad);
    return this.http.httpPutP('/peliculas/', unaEntidad);
  }

}
