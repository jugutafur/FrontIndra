import { Component, OnInit } from '@angular/core';
import { archivo, Person, Machine, Purchuse, Active } from '../../../core/models/Archivo.models';
import { ApiService } from '../../../core/services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  habilitarCreate : boolean = false;
  habilitarUpdate : boolean = false;
  habilitarUpdate2 : boolean = false;
  habilitarDelete : boolean = false;
  confirmacioDelete : boolean = false;
  id : String = "";
  enviarActivo : Active = {
    id:null,
    type : null,
    city : null,
    nameResponsible : null,
    identificationResponsible : null,
    positionResponsible : null,
    nameActive : null,
    descriptionActive : null,
    dimensionsActive  : null,
    serieActive  : null,
    numberInsideInventoryActive  : null,
    valueActive  : null,
    datePurchuse  : null
  }
  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  create(){
    this.habilitarCreate=true;
    this.habilitarUpdate = false;
    this.habilitarUpdate2 = false;
    this.habilitarDelete = false;
  }

  update(){
    this.habilitarCreate=false;
    this.habilitarDelete = false;
    this.habilitarUpdate = true;
  }

  Eliminar(){
    this.habilitarDelete = true;
    this.habilitarCreate=false;
    this.habilitarUpdate = false;
    this.habilitarUpdate2 = false;
  }

  Enviar(){
    this.habilitarCreate=false;
    console.log("esto es el objeto que envio");
    console.log(this.enviarActivo);
    this.apiService.createActive(this.enviarActivo).subscribe();
    this.toastrService.success("Registro Guardado con exito");
    this.toastrService.success("Por favor actualizar la tabla");
  }


  buscar(){
    this.apiService.updateActivo(this.id).subscribe(data =>{
      this.enviarActivo = data
      if (data == null){
        this.habilitarUpdate2 = false;
        this.toastrService.error("El numero ingresado no pertenece a la tabla");
      } else {
        console.log(this.enviarActivo);
        this.habilitarUpdate2 = true;
      }
    });
  }

  EliminarArchive(){
    this.apiService.DeleteActive(this.id).subscribe(data => {
      this.confirmacioDelete = data;
      if(this.confirmacioDelete){
        this.toastrService.success("Borrado Exitoso");
        this.toastrService.success("Por favor actualizar la tabla");
      }else {
        this.toastrService.error("El numero ingresado no pertenece a la tabla");
      }
    })
  }


}
