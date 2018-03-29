import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {WarehouseSearch, Warehouse} from './warehouse';


@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent {

  
  displayedColumns = ['no', 'warehouse', 'region', 'country', 'segments'];
  dataSource = new MatTableDataSource(WAREHOUSE);

  warehouseSearch = new WarehouseSearch('', '', '', '', '', '', '');
  
  //Regions dropdown
  regions: any[] =  [{name:'warehouse'}, {name:'region'}, {name:'country'},{name:'segment'}];

  //filterType dropdown
  filterType : any[] = [{name:'warehouse'}, {name:'region'}, {name:'country'},{name:'segment'}];
  
  //countries dropdown
  countries: any[] = [{name:'Australia'}, {name:'India'}, {name:'US'}];

  //filterValue dropdown
  filterValue: any[] = [{name:'Australia'}, {name:'India'}, {name:'US'}];

  //logicalComparisions dropdown
  logicalComparisions: any[] = [{symbol:'&', name: 'AND'}, {symbol:'|', name:'OR'}];

  applyFilter(filterValue: string) {
    //filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

    //console.log("Length "+ Object.keys(this.dataSource).length);
    //this.onSearch();
  }

filterdList: Warehouse[];

  onFilter() {
    
      console.log("searchText " + this.warehouseSearch.searchStr);
      console.log("region " + this.warehouseSearch.region);
      console.log("country " + this.warehouseSearch.country);
      console.log("logicalComp " + this.warehouseSearch.logicalComp);
      console.log("filterType " + this.warehouseSearch.filterType);
      console.log("filterValue " + this.warehouseSearch.filterValue);

  /*var dataList: Warehouse[] = WAREHOUSE;

  console.log(dataList);
  for (var i=0; i < dataList.length; i++){
    console.log(dataList[i].country +"="+ this.warehouseSearch.country);
    if(dataList[i].country = this.warehouseSearch.country ) {
      this.filterdList = (dataList[i]);
    }
  }
  this.dataSource= this.filterdList;*/
  }

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  OnInit(){}
}

export interface Warehouse {
  
  no: number;
  warehouse: string;
  region: string;
  country: string;
  segments: string;
}

const WAREHOUSE: Warehouse[] = [
  {no: 1, warehouse: 'Bathurst Shed 3', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 2, warehouse: 'Bathurst Shed 7', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 3, warehouse: 'Bathurst Shed 1', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 8, warehouse: 'Bathurst Shed 5&6', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 5, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'}
]; 



