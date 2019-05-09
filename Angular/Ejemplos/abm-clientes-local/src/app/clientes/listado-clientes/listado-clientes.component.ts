import { Component, OnInit } from '@angular/core';

// Importamos datos del modelo
import { Cliente } from '../../cliente.model';
import { Grupo } from '../../grupo.model';

// Importamos el servicio de clientes
import { ClienteService } from '../../cliente.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  // #region Atributos

  clientes: Cliente[]; // listado de clientes

  // #endregion

  // Creamos una instancia de cliente service por medio de inyeccion de dependencias
  constructor(public miClienteService: ClienteService) { }

  ngOnInit() {

    // Una vez inicializado el componente vamos a pedirle al servicio que nos pase los clientes
    this.clientes = this.miClienteService.getClientes();

  }

}
