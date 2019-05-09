import { Component } from '@angular/core';
import { MiHTTPService } from './services/mi-http.service';
import { httpFactory } from '@angular/http/src/http_module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heladeria';

}
