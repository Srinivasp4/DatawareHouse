import {Component} from '@angular/core';


@Component({
  selector: 'agm-root',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class MapComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}