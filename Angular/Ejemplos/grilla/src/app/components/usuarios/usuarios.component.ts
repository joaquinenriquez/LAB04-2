import { Component, OnInit } from '@angular/core';

import { IUsuario } from 'src/app/models/iusuario.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  /* #region  Atributos */

  usuarios: object;
  data: object;
  loading: boolean;

  /* #endregion */

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data => {
    this.data = data;
    this.loading = false;
    });
    console.log(this.data);
  }

}
