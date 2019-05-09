import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteService } from './../cliente.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

// Agregamos FormsModule para poder utilizar la directica ngModel en la template
import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';


@NgModule({
  declarations: [AltaClienteComponent, ListadoClientesComponent],
  imports: [
    CommonModule,
    FormsModule // Agregamos el import de FormsModule
  ],

  providers: [
    ClienteService
  ],

  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ]

})
export class ClientesModule { }
