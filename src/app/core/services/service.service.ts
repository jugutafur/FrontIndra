import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Operations } from '../models/Archivo.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllOperations (){
    return this.http.get<any>(environment.Url_apiBD2+ "Multiplicacion/todos");
  }

  createOperation(operationsSend: Operations){
    return this.http.post(environment.Url_apiBD2+ "Multiplicacion/save", operationsSend);
  }

  DeleteActive(idActive: String){
    console.log("ver id a Eliminar desde service");
    console.log(idActive);
    return this.http.delete<boolean>(environment.Url_apiBD2+ "Multiplicacion/delete/" + idActive);
  }
}
