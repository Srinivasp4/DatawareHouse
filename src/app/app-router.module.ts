import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  { path: '', component: WarehouseListComponent },
  { path: 'warehouse', component: WarehouseListComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRouterModule { }
