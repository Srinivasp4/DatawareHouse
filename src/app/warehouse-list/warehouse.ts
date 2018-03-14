export class Warehouse {
  constructor(
  	public no: number
  	,public warehouse: string
  	,public region: string
  	,public country: string
  	,public segments: string
  ) {}
}


export class WarehouseSearch {
  constructor(
  	public searchStr: string
  	,public region: string
  	,public country: string
  	,public segments: string
  	,public logicalComp: string
  ) {}
}