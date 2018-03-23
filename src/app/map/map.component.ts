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
}
