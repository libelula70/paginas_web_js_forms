import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  titulo: string
  logo: string
  logoAlt: string


  constructor() {
    
   }

  ngOnInit() {
    this.titulo = 'Proyecto Angular'
    this.logo = "../../assets/Logo-angular.svg"
    this.logoAlt = "logotipo de Angular"
  }

}
