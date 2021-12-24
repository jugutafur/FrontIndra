import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Operations } from '../../core/models/Archivo.models';
import { ApiService } from '../../core/services/service.service';
import { Busqueda } from '../../core/models/Optiones';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent {

  numeroUno: number = 0;
  numeroDos: number = 0;
  resultado: number = 0;
  busqueda: number = 0;
  busquedaTipo: number = 0;
  busquedaFecha: Date;
  busquedaSerial: number;
  nameCity : String = "";
  namePosition: String = "";
  nameType: String = "";


  showTableType: boolean = false;
  optionsBusqueda: Array<Busqueda>;

  operations : Operations[]=[];

  operationsSend : Operations ={
  id: null,
  dateCreate: null,
  numberOne : this.numeroUno,
  numberTwo : this.numeroDos,
  result : this.resultado,
  }

  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.UpdateLogs();
  }

  UpdateLogs(){
    this.apiService.getAllOperations().subscribe(data => {
      this.operations= data
      console.log("This is mine operations");
      console.log(this.operations);
    });
  }

  Calcular(numberOne: number, numberTwo:number){
    this.numeroUno= numberOne;
    this.numeroDos= numberTwo;
    this.resultado= numberOne * numberTwo;
    this.operationsSend.dateCreate = new Date();
    this.operationsSend.numberOne = this.numeroUno;
    this.operationsSend.numberTwo = this.numeroDos;
    this.operationsSend.result = this.resultado;
    this.toastrService.success("Actulizar tabla logs");
    //Send Object to save in DB
    this.apiService.createOperation(this.operationsSend).subscribe();
    this.toastrService.success("Registro Guardado con exito");
  }

}
