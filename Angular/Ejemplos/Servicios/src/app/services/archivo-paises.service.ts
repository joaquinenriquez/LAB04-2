import { Injectable } from '@angular/core';

// Importamos MiHtppService para poder usarlo
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivoPaisesService {

  urlApi = 'ttps://restcountries.eu/rest/v2';

  // Creamos un objeto MiHttpService como inyeccion de depencia en el constructor
  constructor(public miHttp: MiHttpService) {}

  public traerTodosLosPaises(ruta: string) {
    return this.miHttp.httpGetPromesa(this.urlApi + ruta)
    .toPromise()
    .

  }

}
