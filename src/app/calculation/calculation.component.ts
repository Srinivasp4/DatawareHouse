import {Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

import {CalculationSearch} from './calculation';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

	displayedColumns = ['no', 'warehouse', 'region', 'country', 'segments'];
	dataSourceCal = new MatTableDataSource(WAREHOUSECAL);

	calculationSearch = new CalculationSearch('', '', '', '', '');

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

	constructor() { }

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