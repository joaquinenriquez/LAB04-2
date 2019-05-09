import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Output()
  public propagar = new EventEmitter<string>();

  public mensaje: string;

  constructor() { }

  ngOnInit() {
  }

  public onPropagar() {
    this.propagar.emit(this.mensaje);
  }

}
