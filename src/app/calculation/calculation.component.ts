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

	displayedColumns = ['no', 'warehouse', 'region', 'country', 'segments'];
	dataSourceCal = new MatTableDataSource(WAREHOUSECAL);

	calculationSearch = new CalculationSearch('', '', '', '', '');

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
  
  no: number;
  warehouse: string;
  region: string;
  country: string;
  segments: string;
}


const WAREHOUSECAL: Warehousecal[] = [
  {no: 1, warehouse: 'RC ODESSA', region: 'CIS', country: 'Ukrine', segments: 'Royal Canin'},
  {no: 2, warehouse: 'RC KIEV', region: 'CIS', country: 'Ukrine', segments: 'Royal Canin'},
  {no: 3, warehouse: 'RC Radem', region: 'CIS', country: 'Ukrine', segments: 'Royal Canin'},
  {no: 4, warehouse: 'Kiev Warehouse', region: 'CIS', country: 'Ukrine', segments: 'Royal Canin'}
  
]; 