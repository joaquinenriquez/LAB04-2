import { Injectable } from '@angular/core';

import { Cliente } from './cliente.model';
import { Grupo } from './grupo.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // #region Atributos
  private clientes: Cliente[];
  private grupos: Grupo[];

  // #endregion

  constructor() {

    // Creamos un par de grupos de prueba
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },

      {
        id: 1,
        nombre: 'Activos'
      },

      {
        id: 2,
        nombre: 'Inactivos'
      },

      {
        id: 3,
        nombre: 'capos'
      }

    ];

    // Inicializamos el Array de clientes
    this.clientes = [];

  }

  // #region Métodos
  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      codigoPostal: '',
      direccion: '',
      grupo: 0
    };
  }

  // #endregion
}
