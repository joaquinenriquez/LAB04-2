import { Component, OnInit, Input } from '@angular/core';
import { IUsuario } from 'src/app/models/iusuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() datos: IUsuario;

  constructor() { }

  ngOnInit() {
  }

}
