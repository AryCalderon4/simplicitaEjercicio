import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  @Input() datosRecibidos; //variable para recibir los datos del Api


  constructor() { }

  ngOnInit(): void {
  }

}
