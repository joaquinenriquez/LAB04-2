/*
Cuando creamos el servicio mediante Angular-CLI, automaticamente nos importa decorador Injectable
Este decorador nos va a permitir utilizar el servicio como una depedencia inyectable
*/
import { Injectable } from '@angular/core';

/*
Importamos las clases Http y Response del modulo @angular/http
Previamente para poder utilizarlo debemo instalarlo:
npm i @angular/http
*/
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  /*
   Estamos inyectando como dependencia la clase http
   Esto quiere decir que dentro de la clase de nuestro servicio
   vamos a poder utilizar un objeto http
  */
  constructor(public http: Http) {

  }

  // public httpGetPromesa(url: string, objeto: any) { //Preguntar para que es el objeto
  public httpGetPromesa(url: string) {
    return this.http
      // Le decimos que haga un request por el metodo get a la url que nos pasaron como parametro
      .get(url)
      .toPromise()
      .then(this.extraerDatos) /* Que cuando este disponible el recurso se llame a nuestro metodo extraerDatos.
                                  Le va a pasar como parametro la response */
      .catch(this.capturarError); // Que cuando ocurra un error se llame a nuestro metodo capturarError

  }

  private extraerDatos(respuesta: Response) {
    return respuesta.json() || {} ;
  }

  private capturarError(error: Response | any) {
    console.log('Error!!!:');
    return error;
  }

}
