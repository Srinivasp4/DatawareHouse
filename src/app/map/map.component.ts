import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'agm-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat: number = 38.9637;
  lng: number = 35.2433;

  lat1: number = 33.2232;
  lng1: number = 43.6793;

  lat2: number = 39.913818;
  lng2: number = 116.363625;

  lat3: number = 28.0339;
  lng3: number = 1.6596;
  
  lat4: number = 41.8719;
  lng4: number = 12.5674;

  lat5: number = 17.6078;
  lng5: number = 8.0817;

  lat6: number = 20.5937;
  lng6: number = 78.9629;
  
}


