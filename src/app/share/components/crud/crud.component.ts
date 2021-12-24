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

  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  Eliminar(){
    this.habilitarDelete = true;
    this.habilitarCreate=false;
    this.habilitarUpdate = false;
    this.habilitarUpdate2 = false;
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
