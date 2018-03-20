import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive }  from '@angular/router';

import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { MapComponent } from './map/map.component';
import { FaqComponent } from './faq/faq.component';
import { QuizComponent } from './quiz/quiz.component';
import { CalculationComponent } from './calculation/calculation.component';

import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
  { path: '', component: MapComponent },
  { path: 'sites', component: WarehouseListComponent },
  { path: 'calculator', component: CalculationComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'user', component: UserComponent },
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
