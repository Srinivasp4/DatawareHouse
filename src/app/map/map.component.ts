import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'agm-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat: number = 20.385044;
  lng: number = 7.486671;
}
