import { Injectable } from '@angular/core';

/*
Luego de haber instalado el modulo HTTPModule via npm
npm i -S @angular/http
Importamos la clase Http y Response
*/
import { Http, Response } from '@angular/http';
import { IHelado } from '../model/ihelado.modells';


@Injectable({
  providedIn: 'root'
})
export class MiHTTPService {

  constructor(public http: Http) { }

  // #region Metodos get

  public httpGetPromesa(url: string) {
    return this.http.get('http://localhost/api/apirestV2-POO/index.php/cd/1')
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.manejarError);
  }

  // #endregion

// tslint:disable-next-line: deprecation
  public extraerDatos(respuestaOK: Response) {
    return respuestaOK.json();
  }

  // tslint:disable-next-line: deprecation
  public manejarError(respuestaError: Response) {
    return respuestaError;
  }

}


