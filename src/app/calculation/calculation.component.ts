import { Observable } from 'rxjs/Observable';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

import {CalculationSearch} from './calculation';
import {BarRatingModule} from 'ngx-bar-rating';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

	WAREHOUSECAL: Warehousecal[] = [
	{warehouse: 'RC ODESSA', region: 'CIS', country: 'Ukrine', segments: 'Royal Canin'},
	{warehouse: 'RC KIEV', region: 'CIS', country: 'Ukrine', segments: 'Royal Canin'},
	{warehouse: 'RC Radem', region: 'CIS', country: 'Ukrine', segments: 'Royal Canin'},
	{warehouse: 'Kiev Warehouse', region: 'CIS', country: 'Ukrine', segments: 'Royal Canin'}	
	];

	warehouseSearch = new WarehouseSearch('', '', '', '');
	// Chart starting : refer "https://valor-software.com/ng2-charts/#pieChart"
	public chartLabels :string[] = ['USA', 'Australia', 'Canada', 'Germany', 'Japan'];
	public chartData :number[] = [20, 10, 10, 8, 6];
	public chartType: string = 'doughnut';

	public chartClicked(e:any):void {
	// todo :: handle on click 
	//console.log(e);
	}

	public chartHovered(e:any):void {
	//tode :: handle on hover
	//console.log(e);
	}
	//chart changes ending 
  calculationWarehouseCnt;
	constructor() {
		this.selectedData = Observable.of(this.WAREHOUSECAL);
		this.setPrimaryFilterTypes();
		this.setSecondaryFilterTypes();
		this.calculationWarehouseCnt = this.WAREHOUSECAL.length;
	}
	displayedColumns = ['warehouse', 'region', 'country', 'segments'];
	dataSourceCal = new MatTableDataSource(this.WAREHOUSECAL);

	private selectedData: Observable<Warehousecal[]>;

	calculationSearch = new CalculationSearch('', '', '', '', '');

	regions: any[] =  [{name:'warehouse'}, {name:'region'}, {name:'country'},{name:'segment'}];

  //filterType dropdown
  primaryFilterTypes : any[] = [];//[{name:'warehouse'}, {name:'region'}, {name:'country'},{name:'segment'}];
  setPrimaryFilterTypes() {
    this.primaryFilterTypes = [];
      this.selectedData.subscribe(warehouseOjb =>{
      for (let key of warehouseOjb) {
        for(var i in key){
           if(!this.primaryFilterTypes.find(x => x.name == i)) {
            this.primaryFilterTypes.push({name: i});
           }
        }
      }
    });
  }   

  //filterValue dropdown
  primaryFilterValues: any[] = [];//[{name:'Australia'}, {name:'India'}, {name:'US'}];
  onClickPrimaryFilterValue() {
	  console.log("Entering into onClickPrimaryFilterValue");
	this.primaryFilterValues = [];
	this.selectedData.subscribe(warehouseOjb =>{
      for (let key of warehouseOjb) {
        for(var i in key){
			console.log(i +"=="+ this.warehouseSearch.primaryFilterType);
            if(i == this.warehouseSearch.primaryFilterType) {
              if(!this.primaryFilterValues.find(x => x.name == key[i])) {
                this.primaryFilterValues.push({name: key[i]});
              }
            }
        }
      }
    });
  }

  //filterType dropdown
  secondaryFilterTypes : any[] = [];//[{name:'warehouse'}, {name:'region'}, {name:'country'},{name:'segment'}];
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
  secondaryFilterValues: any[] = [];//[{name:'Australia'}, {name:'India'}, {name:'US'}];
  onChangeSecondaryFilterType() {
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

filterdList: Warehousecal[] = [];
  onFilter() {
	this.filterdList = [];
	let primaryFilterdList: Warehousecal[] = [];
	let secondaryFilterdList = [];
	
	this.selectedData.subscribe(warehouseOjb =>{
		for (let key of warehouseOjb) {
			for(var i in key){
			if(this.warehouseSearch.primaryFilterType !="" && this.warehouseSearch.primaryFilterValue != "") {
				if(i == this.warehouseSearch.primaryFilterType) {
					if(this.warehouseSearch.primaryFilterValue == key[i]) {
						if(this.warehouseSearch.secondaryFilterType !="" && this.warehouseSearch.secondaryFilterValue != "") {
						if(this.checkSecondaryFilter(key)) {
							this.filterdList.push(key);
						}
						}else{
							this.filterdList.push(key);
						}
					}
				}
			}else if(this.warehouseSearch.secondaryFilterType !="" && this.warehouseSearch.secondaryFilterValue != "") {
				if(i == this.warehouseSearch.secondaryFilterType) {
					if(this.warehouseSearch.secondaryFilterValue == key[i]) {
						this.filterdList.push(key);
					}
				}
			}else{
				this.filterdList = this.WAREHOUSECAL;
			}
		}
	}
});

  this.displayedColumns = ['warehouse', 'region', 'country', 'segments'];
  this.dataSourceCal = new MatTableDataSource([]);
  this.dataSourceCal = new MatTableDataSource(this.filterdList);
	this.calculationWarehouseCnt = this.filterdList.length;
  }

  checkSecondaryFilter(warehouseobj: Warehousecal): Boolean {
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

  //countries dropdown
  countries: any[] = [{name:'Australia'}, {name:'India'}, {name:'US'}];

  //logicalComparisions dropdown
	logicalComparisions: any[] = [{symbol:'&', name: 'AND'}, {symbol:'|', name:'OR'}];

	applyFilter(filterValue: string) {
		//filterValue = filterValue.trim(); // Remove whitespace
		//filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSourceCal.filter = filterValue;
	}


	@ViewChild(MatSort) sort: MatSort;

	/**
	* Set the sort after the view init since this component will
	* be able to query its view for the initialized sort.
	*/
	ngAfterViewInit() {
		this.dataSourceCal.sort = this.sort;
	}

	ngOnInit() {
	}

}

export interface Warehousecal {
  
  warehouse: string;
  region: string;
  country: string;
  segments: string;
}
 

export class WarehouseSearch {
  constructor(
  	public secondaryFilterType: string
  	,public secondaryFilterValue: string
    ,public primaryFilterType: string
    ,public primaryFilterValue: string
  ) {}
}