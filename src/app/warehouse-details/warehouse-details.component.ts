import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.css']
})
export class WarehouseDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lat: number = 17.3850;
  lng: number = 78.4867;

}
