import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'signup',component: SignupComponent},
  {path: 'home',component: HomeComponent},
  {path: 'appointment',component: AppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupComponent, HomeComponent, AppointmentComponent]
