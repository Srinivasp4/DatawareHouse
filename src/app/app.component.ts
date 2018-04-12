import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  starRating = 3;
  vRating = 1;
  faoRating = 5.6;
  movieRating = 2;
}

