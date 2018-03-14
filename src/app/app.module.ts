import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSortModule, MatTableModule } from "@angular/material";
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
