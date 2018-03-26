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


  mapClicked(event){
    this.lat = event.lat;
    this.lng = event.lng;
    console.log(event);
  }

  

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

