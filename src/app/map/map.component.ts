import {Component} from '@angular/core';


@Component({
  selector: 'agm-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat: number = 17.385044;
  lng: number = 78.486671;
}