import { Component, OnInit } from '@angular/core';
import { MiHTTPService } from 'src/app/services/mi-http.service';
import { httpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  cosas: any;

  constructor(public http: MiHTTPService) { }

  ngOnInit() {

    console.log(this.http.httpGetPromesa('http://localhost/api/apirestV2-POO/index.php/cd/1'));
    //console.log(this.cosas);
  }

}
