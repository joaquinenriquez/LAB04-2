import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../cliente.service';
import { Cliente } from '../../cliente.model';
import { Grupo } from '../../grupo.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  // #region Atributos

  cliente: Cliente;
  grupos: Grupo[];

  // #endregion

  // Creamos una instanacia de clientesService mediante inyecccion de depencias
  constructor(private clientesService: ClienteService) { }

  ngOnInit() {

    // OnInit se ejecuta despues del constructor, por lo cual ya tenemos disponible clientesService
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();

  }

  // #region Métodos

  // Este metodo se va a ejecutar cuando desde el formulario de alta se produzca el envio de datos
  public nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }

  // #endregion


}
