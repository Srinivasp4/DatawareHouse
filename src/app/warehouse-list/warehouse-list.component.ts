import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {WarehouseSearch, Warehouse} from './warehouse';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppComponent } from '../app.component';
import { PERSONS, Person } from './model';
import { ExcelService } from './excel.service';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css'],
})


export class WarehouseListComponent implements OnInit {


  WAREHOUSE: Warehouse[] = [
    {warehouse: 'Bathurst Shed 3', region: 'APAC', country: 'Australia', segments: 'Pet Nutrition'},
    {warehouse: 'Bathurst Shed 7', region: 'APAC1', country: 'Australia', segments: 'Pet Nutrition'},
    {warehouse: 'Bathurst Shed 1', region: 'APAC', country: 'US', segments: 'Pet Nutrition'},
    {warehouse: 'Bathurst Shed 5&6', region: 'APAC2', country: 'Australia', segments: 'Pet Nutritions'},
    {warehouse: 'Gadsden Court', region: 'APAC2', country: 'Australia', segments: 'Pet Nutrition'}
  ]; 

  selected;
  private selectedData: Observable<Warehouse[]>;
  warehousesCount;
  
  ngOnInit(){
    this.selectedData = Observable.of(this.WAREHOUSE);
    this.warehousesCount = this.WAREHOUSE.length;
    this.setFilterTypes();
    this.setSecondaryFilterTypes();
  }
  
  onSelect(val){
    //console.log(val);
    //this.selectedData = this.WAREHOUSE.filter(x => x.region == val);
  }

  

  
  
  displayedColumns = ['warehouse', 'region', 'country', 'segments'];
  dataSource = new MatTableDataSource(this.WAREHOUSE);

  warehouseSearch = new WarehouseSearch( '', '', '', '', '');
  
  //Regions dropdown
  regions: any[] =  [{name:'region'}];

  //filterType dropdown
  filterTypes : any[] = [];//[{name:'warehouse'}, {name:'region'}, {name:'country'}, {name:'segments'}];
  setFilterTypes() {
    this.filterTypes = [];
      this.selectedData.subscribe(warehouseOjb =>{
      for (let key of warehouseOjb) {
        for(var i in key){
           if(!this.filterTypes.find(x => x.name == i)) {
            this.filterTypes.push({name: i});
           }
        }
      }
    });
  }    
  
  //filterValue dropdown
  filterValues: any[] = [];//[{name:'APAC'}, {name:'APAC1'}, {name:'APAC2'}];
  onChangeOfFilterType() {
    this.filterValues = [];
    this.selectedData.subscribe(warehouseOjb =>{
      for (let key of warehouseOjb) {
        for(var i in key){
            if(i == this.warehouseSearch.filterType) {
              if(!this.filterValues.find(x => x.name == key[i])) {
                this.filterValues.push({name: key[i]});
              }
            }
        }
      }
    });
  }

//filterType dropdown
  secondaryFilterTypes : any[] = [];//[{name:'warehouse'}, {name:'region'}, {name:'country'}, {name:'segments'}];
  setSecondaryFilterTypes() {
    this.secondaryFilterTypes = [];
      this.selectedData.subscribe(warehouseOjb =>{
      for (let key of warehouseOjb) {
        for(var i in key){
           if(!this.secondaryFilterTypes.find(x => x.name == i)) {
            this.secondaryFilterTypes.push({name: i});
           }
        }
      }
    });
  }    
  
  //filterValue dropdown
  secondaryFilterValues: any[] = [];//[{name:'APAC'}, {name:'APAC1'}, {name:'APAC2'}];
  onChangeOfSecondaryFilterType() {
    this.secondaryFilterValues = [];
    this.selectedData.subscribe(warehouseOjb =>{
      for (let key of warehouseOjb) {
        for(var i in key){
            if(i == this.warehouseSearch.secondaryFilterType) {
              if(!this.secondaryFilterValues.find(x => x.name == key[i])) {
                this.secondaryFilterValues.push({name: key[i]});
              }
            }
        }
      }
    });
  }

  //logicalComparisions dropdown
  logicalComparisions: any[] = [{symbol:'&', name: 'AND'}, {symbol:'|', name:'OR'}]; 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
    this.warehousesCount = this.dataSource.filteredData.length;
  }

filterdList: Warehouse[] = [];

onFilter() {
    
this.filterdList = [];
let primaryFilterdList: Warehouse[] = [];
let secondaryFilterdList = [];
let logicalOperator = this.warehouseSearch.logicalComp;
this.selectedData.subscribe(warehouseOjb =>{
    for (let key of warehouseOjb) {
        for(var i in key){
            if(i == this.warehouseSearch.filterType) {
              if(this.warehouseSearch.filterValue == key[i]) {
                primaryFilterdList.push(key);
              }
            }
        }
    }
  });

  this.selectedData.subscribe(warehouseOjb =>{
    for (let key of warehouseOjb) {
        for(var i in key){
            if(i == this.warehouseSearch.secondaryFilterType) {
              if(this.warehouseSearch.secondaryFilterValue == key[i]) {
                if(!this.checkdupicate(primaryFilterdList, key)) {
                  secondaryFilterdList.push(key);
                }
              }
            }
        }
    }
  });
  
  if(primaryFilterdList.length > 0 && secondaryFilterdList.length > 0) {
    console.log("logicalOperator "+logicalOperator);
    //console.log(logicalOperator === '|');
    if(logicalOperator === '|') {
      this.filterdList = primaryFilterdList.concat(secondaryFilterdList);
    } else if (logicalOperator === '&'){
        this.filterdList = this.applyLogicalOperatorAND(Observable.of(primaryFilterdList.concat(secondaryFilterdList)));
    } else {
      this.filterdList = primaryFilterdList.concat(secondaryFilterdList);
    }
  } else if(primaryFilterdList.length > 0) {
    this.filterdList = primaryFilterdList;
  } else if(secondaryFilterdList.length > 0) {
    this.filterdList = secondaryFilterdList;
  }

  //console.log("Length "+ this.filterdList.length);
  this.displayedColumns = ['warehouse', 'region', 'country', 'segments'];
  this.dataSource = new MatTableDataSource([]);
  this.dataSource = new MatTableDataSource(this.filterdList);
  this.warehousesCount = this.filterdList.length;
}

checkdupicate(primaryFilterdList: Warehouse[], warehouse: Warehouse): Boolean {
  let isDuplicate = false;
  primaryFilterdList.forEach(warehouseObj => {
    if(warehouseObj.warehouse === warehouse.warehouse
          && warehouseObj.region === warehouse.region
          && warehouseObj.country === warehouse.country
          && warehouseObj.segments === warehouse.segments) {
            isDuplicate = true;
    }
  });
  return isDuplicate;
}

applyLogicalOperatorAND(filterList: Observable<Warehouse[]>): Warehouse[] {
let reqList: Warehouse[] = [];
  filterList.subscribe(warehouseOjb =>{
    for (let key of warehouseOjb) {
        for(var i in key){
            if(i == this.warehouseSearch.filterType) {
              if(this.warehouseSearch.filterValue == key[i]) {
                if(this.checkSecondaryFilter(key)) {
                  console.log("Matched "+ key[i]+" "+ this.warehouseSearch.filterValue == key[i]);
                  reqList.push(key);
                }
              }
            }
        }
    }
  });
return reqList;
};

checkSecondaryFilter(warehouseobj: Warehouse): Boolean {
  for (let key in warehouseobj) {
    console.log ('key: ' +  key + ',  value: ' + warehouseobj[key]);
    if(key == this.warehouseSearch.secondaryFilterType) {
        if(this.warehouseSearch.secondaryFilterValue == warehouseobj[key]) {
          return true;
        }
      }
  }
    return false;
}

applyANDoperator(primaryFilterdList: Warehouse[], secondaryFilterdList: Warehouse[]): Warehouse[] {
  let reqList: Warehouse[] = [];
  if(secondaryFilterdList.length > primaryFilterdList.length) {
    secondaryFilterdList.forEach(secondaryFilters => {
      primaryFilterdList.forEach(warehouseObj => {
        if(warehouseObj.warehouse === secondaryFilters.warehouse
          && warehouseObj.region === secondaryFilters.region
          && warehouseObj.country === secondaryFilters.country
          && warehouseObj.segments === secondaryFilters.segments) {
            reqList.push(warehouseObj);
      }
      });
    });
  } else if(secondaryFilterdList.length < primaryFilterdList.length) {
    secondaryFilterdList.forEach(secondaryFilters => {
      primaryFilterdList.forEach(warehouseObj => {
        if(secondaryFilters.warehouse === warehouseObj.warehouse
          && secondaryFilters.region === warehouseObj.region
          && secondaryFilters.country === warehouseObj.country
          && secondaryFilters.segments === warehouseObj.segments) {
            reqList.push(warehouseObj);
      }
      });
    });
  }
  
  return reqList;
}

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  
  persons: Person[];
  constructor(private excelService: ExcelService) {
    this.excelService = excelService;
    this.persons = PERSONS;
  }

  exportToExcel(event) {
    this.excelService.exportAsExcelFile(PERSONS, 'persons');
  }
  
  
}

export interface Warehouse {
  
  
  warehouse: string;
  region: string;
  country: string;
  segments: string;
}
