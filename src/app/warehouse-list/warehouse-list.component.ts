import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {WarehouseSearch} from './warehouse';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

  
  displayedColumns = ['no', 'warehouse', 'region', 'country', 'segments'];
  dataSource = new MatTableDataSource(WAREHOUSE);

  warehouseSearch = new WarehouseSearch('', '', '', '');
  
  //Regions dropdown
  regions : any[] = [{name:'APAC'}, {name:'APAC2'}, {name:'APAC3'}];
  
  //countries dropdown
  countries: any[] = [{name:'Australia'}, {name:'India'}, {name:'US'}];
  
  //logicalComparisions dropdown
  logicalComparisions: any[] = [{symbol:'&', name: 'AND'}, {symbol:'|', name:'OR'}];

  applyFilter(filterValue: string) {
    //filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.onSearch();
  }

  onSearch() {
    
    console.log("searchText " + this.warehouseSearch.searchStr);
    console.log("region " + this.warehouseSearch.region);
    console.log("country " + this.warehouseSearch.country);
	console.log("logicalComp " + this.warehouseSearch.logicalComp);
    
  }

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}

export interface Warehouse {
  
  no: number;
  warehouse: string;
  region: string;
  country: string;
  segments: string;
}

const WAREHOUSE: Warehouse[] = [
  {no: 1, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 2, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 3, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 8, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 5, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 5, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 0, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
  {no: 2, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'}
];  
