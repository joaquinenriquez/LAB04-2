/* Por defecto cuando creamos un servicio con Angular-CLI se importa el decorador
@Injectable
*/
import { Injectable } from '@angular/core';

// Importamos Http y Response del modulo HttpModule
import { Http, Response } from '@angular/http';

// Importamos Observable de RxJS
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

// #region Constructor
  // tslint:disable-next-line: deprecation
constructor(public http: Http) { }

// #endregion

// #region Metodos

  // #region GET

  public httpGetPromesa(url: string) {
    return this.http.get(url)
      .toPromise()
      .then(this.extraerDatos)
      .catch(this.manejarError);
  }

// tslint:disable-next-line: deprecation
  public httpGetObservable(url: string): Observable<Response> {
    return this.http.get(url)
// tslint:disable-next-line: deprecation
      .map( (respuesta: Response ) => respuesta.json() )
      .
  }


// tslint:disable-next-line: deprecation
  public extraerDatos(respuestaOk: Response) {
    return respuestaOk.json() || {};
  }

// tslint:disable-next-line: deprecation
  private manejarError(respuestaError: Response) {
    return respuestaError;

  }

  // #endregion

//#endregion

}


