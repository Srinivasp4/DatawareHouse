import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'agm-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat: number = 17.3850;
  lng: number = 78.4867;

  lat1: number = 13.0827;
  lng1: number = 80.2707;

  lat2: number = 12.9716;
  lng2: number = 77.5946;

  lat3: number = 17.3850;
  lng3: number = 78.4867;
  
  lat4: number = 12.9165;
  lng4: number = 79.1325;

  lat5: number = 12.7904;
  lng5: number = 78.7166;

  lat6: number = 12.7409;
  lng6: number = 77.8253;
  
}


