import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  urlBase = 'http://localhost/api/miApi/index.php';

  constructor(public http: HttpClient) { }

  public httpGetP(url: string) {
    return this.http
      .get(this.urlBase + url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpDeleteP(url: string) {
    return this.http
      .delete(this.urlBase + url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, request: Object) {
    return this.http.post(this.urlBase + url, request).toPromise();
  }

  public httpPutP(url: string, request: Object) {
    return this.http.put(this.urlBase + url, request).toPromise();
  }


  // tslint:disable-next-line:no-shadowed-variable
  public httpGetO<T>(url: string) {
    return this.http.get<T>(this.urlBase + url);
  }


  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }

}
