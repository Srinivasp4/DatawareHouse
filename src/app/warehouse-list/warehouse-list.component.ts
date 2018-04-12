import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {WarehouseSearch, Warehouse} from './warehouse';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent {


  WAREHOUSE: Warehouse[] = [
    {no: 1, warehouse: 'Bathurst Shed 3', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
    {no: 2, warehouse: 'Bathurst Shed 7', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
    {no: 3, warehouse: 'Bathurst Shed 1', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
    {no: 8, warehouse: 'Bathurst Shed 5&6', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
    {no: 5, warehouse: 'Gadsden Court', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'}
  ]; 

  selected;
  selectedData;
  warehousesCount;
  constructor(){
    this.selectedData = this.WAREHOUSE;
    this.warehousesCount = this.selectedData.length;
  }
  
  onSelect(val){
    console.log(val);
    this.selectedData = this.WAREHOUSE.filter(x => x.region == val);
  }
  
  displayedColumns = ['no', 'warehouse', 'region', 'country', 'segments'];
  dataSource = new MatTableDataSource(this.WAREHOUSE);

  warehouseSearch = new WarehouseSearch('', '', '', '', '', '', '');
  
  //Regions dropdown
  regions: any[] =  [{name:'region'}];

  //filterType dropdown
  filterType : any[] = [{name:'country'}];
  
  //countries dropdown
  countries: any[] = [{name:'APAC'}, {name:'APAC1'}, {name:'APAC2'}];

  //filterValue dropdown
  filterValue: any[] = [{name:'Australia'}, {name:'India'}, {name:'US'}];

  //logicalComparisions dropdown
  logicalComparisions: any[] = [{symbol:'&', name: 'AND'}, {symbol:'|', name:'OR'}];
 

  applyFilter(filterValue: string) {
    //filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.warehousesCount = this.dataSource.filteredData.length;

    console.log("Length "+ Object.keys(this.filterValue).length +"value" +this.WAREHOUSE.length);
    console.log(this.warehousesCount);
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

  /* var dataList: Warehouse[] = WAREHOUSE;

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

  /* pipeFilter = '';
  changeFilterData:any[] = [];
  pipeFilterData:any[] =  [];

  jsonData = [
    {key: 1, value:'Data Item 1'},
    {key: 2, value:'Data Item 2'},
    {key: 3, value:'Data Item 3'},
    {key: 4, value:'Data Item 4'},
    {key: 5, value:'Data Item 5'},
    {key: 6, value:'Data Item 6'}
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  
  onSelectChange(event){
    let selectedValue = event.target.value;
    
    // You can implement filtering logic depending on the selectedValue
    if(selectedValue == "region"){
      this.changeFilterData = this.jsonData.slice(0, 2);
    }else if(selectedValue == 2){
      this.changeFilterData =  this.jsonData.slice(0, 3);
    }else if(selectedValue == 3){
      this.changeFilterData =  this.jsonData;
    }else{
      this.changeFilterData =  [];
    }
  } */


  
}

export interface Warehouse {
  
  no: number;
  warehouse: string;
  region: string;
  country: string;
  segments: string;
}





