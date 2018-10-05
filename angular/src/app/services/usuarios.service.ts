import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ContactoIf } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string
  aContactos: Array<ContactoIf>

  constructor(public http: HttpClient) {
    this.aContactos = []
    this.url=environment.api_user
   }

  getLista(): Promise<Array<ContactoIf>> {
    return new Promise<Array<ContactoIf>>( (resolve, reject) => {
      this.http.get(this.url).toPromise()
          .then ((response: any) => {
            this.aContactos = response.results
            resolve(this.aContactos)
          }, (error) => {console.log(error)})
    })
  }

  async getListaAA(): Promise<Array<ContactoIf>>{
    let response:any = await this.http.get(this.url).toPromise()
    return response.results
  }
}
