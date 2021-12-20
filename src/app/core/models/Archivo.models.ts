export interface archivo{
  id:number;
  company : string;
  box  : string;
  bag : string;
  folder : string;
  document : string;
}

export interface Person{
  id:number;
  name : string;
  identification  : string;
}

export interface Machine{
  id:number;
  nameMachine : string;
  dimensions  : string;
  description  : string;
  serie  : string;
  nameInsideInventory  : string;
  value  : string;
  dataPurchuse  : string;
}

export interface Purchuse{
  id:number;
  namePurchuse : string;
  dimensions  : string;
  description  : string;
  serie  : string;
  nameInsideInventory  : string;
  value  : string;
  dataPurchuse  : string;
}

export interface Active{
  id:number;
  type : string;
  city : string;
  nameResponsible : string;
  identificationResponsible : number;
  positionResponsible : string;
  nameActive : string;
  descriptionActive : string;
  dimensionsActive  : string;
  serieActive  : string;
  numberInsideInventoryActive  : string;
  valueActive  : number;
  datePurchuse  : Date;
}
