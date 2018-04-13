import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BarRatingModule} from 'ngx-bar-rating'

@Component({
  selector: 'rating-bar',
  template: `
    <div class="view">
      <h2>Angular Bar Rating</h2>
      
      <bar-rating [(rate)]="starRating"></bar-rating>
      
      <bar-rating name="rating" [(rate)]="movieRating" [max]="4" [theme]="'movie'" [showText]="true"
                      [titles]="['Bad', 'Mediocres' , 'Good', 'Awesome']"  disabled></bar-rating>
                  
      <!-- <bar-rating [(rate)]="vRating" [max]="10" [theme]="'vertical'" [showText]="true"></bar-rating> -->
    
      <bar-rating [rate]="faoRating" (rateChange)="onFaoRate($event)" [max]="10" [theme]="'fontawesome-o'"></bar-rating>
      
      <p *ngIf="!faoRated">Current rating: {{faoRating}}</p>
      <p *ngIf="faoRated">Your rating: {{faoRating}} <i class="link fa fa-times-circle" (click)="faoReset(5.6)"></i></p>
   
    </div>
  `,
})
export class RatingbarComponent {
  
  starRating = 3;
  vRating = 5;
  faoRating = 5.6;
  movieRating = 3;

  faoRated = false;

  onFaoRate(e) {
    this.faoRated = true;
    this.faoRating = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRating = 5.6;
  }
}
