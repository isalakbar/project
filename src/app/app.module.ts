import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component'
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
 
@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    NgxParallaxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
