import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { archivo, Active} from '../models/Archivo.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllActive (){
    return this.http.get<any>(environment.Url_apiBD+ "Activo/todos");
  }

  getAllPerson (){
    return this.http.get<any>(environment.Url_apiBD+ "Persona/todos");
  }

  getAllArchives (){
    return this.http.get<any>(environment.Url_apiBD+ "Tipo/todos");
  }


  getAllPosition (){
    return this.http.get<any>(environment.Url_apiBD+ "Cargo/todos");
  }

  getAllCity (){
    return this.http.get<any>(environment.Url_apiBD+ "Ciudad/todos");
  }

  getAllType (){
    return this.http.get<any>(environment.Url_apiBD+ "Tipo/todos");
  }

  getAllMachine (){
    return this.http.get<any>(environment.Url_apiBD+ "Maquinaria/todos");
  }

  getAllPurchuse (){
    return this.http.get<any>(environment.Url_apiBD+ "Mueble/todos");
  }

  createActive(activo: Active){
    return this.http.post(environment.Url_apiBD+ "Activo/save", activo);
  }

  updateActivo(idActive: String){
    console.log("este es mi update" + idActive);
    return this.http.get<Active>(environment.Url_apiBD + "Activo/"+ idActive);
  }

  DeleteActive(idActive: String){
    console.log("ver id a Eliminar desde service");
    console.log(idActive);
    return this.http.delete<boolean>(environment.Url_apiBD+ "Activo/delete/" + idActive);
  }
/*
  createUser(Archivo: archivo){
    return this.http.post(environment.Url_apiBD+ "save", Archivo);
  }

    updateArchive(id: string, changes: Partial<archivo>){
    return this.http.put<archivo[]>(environment.Url_apiBD + id, changes);
  }

  loginAcount(){
    return this.http.get<archivo[]>(environment.Url_apiBD+ "/todos");
  }
*/
}
