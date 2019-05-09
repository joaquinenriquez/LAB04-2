import { Component, OnInit } from '@angular/core';
import { MiHttpService } from 'src/app/services/mi-http.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  miObjeto: any;

  constructor(public mihttp: MiHttpService) { }

  ngOnInit() {
    console.log(this.mihttp.httpGetPromesa('https://reqres.in/api/users?page=2', this.miObjeto));
  }

}
