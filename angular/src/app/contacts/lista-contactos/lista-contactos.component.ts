import { Component, OnInit } from '@angular/core';
import { ContactoIf } from '../../models/contacto.model';
import { UsuariosService } from '../../services/usuarios.service';
//import { environment } from '../../../environments/environment';


@Component({
  selector: 'cas-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  aContactos: Array<ContactoIf>

  constructor(public usuarios:UsuariosService) { }

  //anteriormente era servicio Http
  //actualmente es servicio HttpClient

  ngOnInit() {
    //this.aContactos= USERS
    this.aContactos = []
   /*  this.http.get(environment.api_user).toPromise()
    .then((response:any) => 
        {this.aContactos = response.results
        console.log(this.aContactos)}) */
    this.usuarios.getLista().then(
      (response:any) => {this.aContactos = response}
    )
  }

  borrarContacto(emailBorrar) {
    this.aContactos= this.aContactos.filter(
      (item) => item.email != emailBorrar)
  }
}
