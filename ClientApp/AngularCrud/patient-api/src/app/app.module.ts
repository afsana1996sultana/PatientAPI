import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetappointmentComponent } from './getappointment/getappointment.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GetappointmentComponent,
    AppointmentlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
