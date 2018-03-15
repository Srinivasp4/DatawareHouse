import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { MapComponent } from './map/map.component';
import { FaqComponent } from './faq/faq.component';
import { QuizComponent } from './quiz/quiz.component';
import { CalculationComponent } from './calculation/calculation.component';


const appRoutes: Routes = [
  { path: '', component: MapComponent },
  { path: 'sites', component: WarehouseListComponent },
  { path: 'calculator', component: CalculationComponent },
  { path: 'home', component: MapComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRouterModule { }
