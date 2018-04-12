import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {WarehouseSearch, Warehouse} from './warehouse';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';



@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent {


  WAREHOUSE: Warehouse[] = [
    {no: 1, warehouse: 'Bathurst Shed 3', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
    {no: 2, warehouse: 'Bathurst Shed 7', region: 'APAC1', country: 'Australia', segments: 'Pet Nutrition'},
    {no: 3, warehouse: 'Bathurst Shed 1', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
    {no: 8, warehouse: 'Bathurst Shed 5&6', region: 'APAC2', country: 'Australia', segments: 'Pet Nutrition'},
    {no: 5, warehouse: 'Gadsden Court', region: 'APAC2', country: 'Australia', segments: 'Pet Nutrition'}
  ]; 

  selected;
  private selectedData: Observable<Warehouse[]>;
  warehousesCount;
  constructor(){
    this.selectedData = Observable.of(this.WAREHOUSE);
    //this.warehousesCount = this.selectedData.length;
  }
  
  onSelect(val){
    console.log(val);
    //this.selectedData = this.WAREHOUSE.filter(x => x.region == val);
  }
  
  displayedColumns = ['no', 'warehouse', 'region', 'country', 'segments'];
  dataSource = new MatTableDataSource(this.WAREHOUSE);

  warehouseSearch = new WarehouseSearch('', '', '', '', '', '', '');
  
  //Regions dropdown
  regions: any[] =  [{name:'region'}];

  //filterType dropdown
  filterTypes : any[] = [{name:'region'}];
  
  //filterValue dropdown
  filterValues: any[] = [{name:'APAC'}, {name:'APAC1'}, {name:'APAC2'}];

  //countries dropdown
  countries: any[] = [{name:'APAC'}, {name:'APAC1'}, {name:'APAC2'}];
  
  //logicalComparisions dropdown
  logicalComparisions: any[] = [{symbol:'&', name: 'AND'}, {symbol:'|', name:'OR'}];
 

  applyFilter(filterValue: string) {
    //filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.warehousesCount = this.dataSource.filteredData.length;

    //console.log("Length "+ Object.keys(this.filterValue).length +"value" +this.WAREHOUSE.length);
    console.log(this.warehousesCount);
    //this.onSearch();
  }

filterdList: Warehouse[] = [];

  onFilter() {
    
      console.log("searchText " + this.warehouseSearch.searchStr);
      console.log("region " + this.warehouseSearch.region);
      console.log("country " + this.warehouseSearch.country);
      console.log("logicalComp " + this.warehouseSearch.logicalComp);
      console.log("filterType " + this.warehouseSearch.filterType);
      console.log("filterValue " + this.warehouseSearch.filterValue);
this.filterdList = [];
this.selectedData.subscribe(warehouseOjb =>{
  warehouseOjb.forEach(key => {
    //console.log("Key "+ key.no);
    //console.log(this.warehouseSearch.region +"=="+ key.region);
    if(this.warehouseSearch.filterType == 'region' ) {
      if(this.warehouseSearch.filterValue == key.region) {
        this.filterdList.push(key);
        console.log(" Obj :" + key.country);
      }
    }
  })

  console.log("Length "+ this.filterdList.length);
  this.displayedColumns = ['no', 'warehouse', 'region', 'country', 'segments'];
  this.dataSource = new MatTableDataSource(this.filterdList);
  });

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





