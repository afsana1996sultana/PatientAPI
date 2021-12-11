import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GetappointmentComponent } from './getappointment/getappointment.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'getappointment',component: GetappointmentComponent},
  {path: 'appointmentlist',component: AppointmentlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, HomeComponent, GetappointmentComponent, AppointmentlistComponent]
