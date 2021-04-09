import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  datosTarjetas = null;
  // Se crea una variable para almacenar los datos del API (en este caso un array)
  // para no tener que hacer la peticion cada vez que se necesite realizar una consulta
  //Se realiza para que los componentes hijos puedan acceder al valor de la variable
  // (en este caso los datos del API) 
  

  constructor(private http: HttpClient) { }


  // Funcion que se realiza en cuanto carga el componente 
  ngOnInit(): void {

    this.http.get('https://simplicita.tk:8000/buscar/medicina').subscribe(datos => {
      console.log(datos);
      this.datosTarjetas = datos; //variable para neviar los datos de Api

    })
  }

}
