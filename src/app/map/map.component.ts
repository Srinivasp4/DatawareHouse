import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'agm-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat: number = 25.2744;
  lng: number = 133.7751;

  lat1: number = 49.7448;
  lng1: number = 49.0500;

  lat2: number = 12.9716;
  lng2: number = 77.5946;

  lat3: number = 54.5260;
  lng3: number = 105.2551;
  
  lat4: number = 1.3521;
  lng4: number = 103.8198;

  lat5: number = 28.3949;
  lng5: number = 84.1240;

  lat6: number = 7.8731;
  lng6: number = 80.7718;
  
}


