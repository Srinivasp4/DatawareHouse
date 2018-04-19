import { ExcelService } from './excel.service';
import { PERSONS, Person } from './model';

export class Warehouse {
  constructor(
  	public warehouse: string
  	,public region: string
  	,public country: string
  	,public segments: string
  ) {}
}


export class WarehouseSearch {
  constructor(
  	public secondaryFilterType: string
  	,public secondaryFilterValue: string
  	,public logicalComp: string
    ,public filterType: string
    ,public filterValue: string
  ) {}
}