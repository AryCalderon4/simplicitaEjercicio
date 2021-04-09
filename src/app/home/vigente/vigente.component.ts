import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-vigente',
  templateUrl: './vigente.component.html',
  styleUrls: ['./vigente.component.css']
})
export class VigenteComponent implements OnInit {
@Input() datosRecibidos; //variable para recibir los datos del Api

  constructor() { }

  ngOnInit(): void {
  }

}
