import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-getappointment',
  templateUrl: './getappointment.component.html',
  styleUrls: ['./getappointment.component.css'],
  providers: [ApiServiceService]
})
export class GetappointmentComponent implements OnInit {
  model = new PatientModel();
  constructor(private apiService: ApiServiceService//, public model: PatientModel)
  ) { }
  ngOnInit(): void {
  }
  clickFunction() {
    
    this.apiService.addPatient(this.model)
      .subscribe({
        next: (res:string) => {
          console.log(res);
          
        },
        //error: (e) => console.error(e)
      });
  }



}
export class PatientModel { 
	public country: string="BD"; 
	public city:string="";
  public countryTravelingTo: string=""; 
	public medicalCenter:string="";
  public firstName: string=""; 
	public lastName:string="";
  public dateOfBirth: string=""; 
	public nationality:string="";
  public gender:string="";
  public maritalStatus:string=""; 
	public emailId:string="";
  public phoneNo:string="";
  public nationalId:string="";
  public passportNo: string=""; 
	public confirmPassportNo:string="";
  public passportIssueDate:string="";
  public passportIssuePlace:string="";
  public passportExpiryDate: string=""; 
	public visaType:string="";
  public positionAppliedFor: string=""; 
	public other:string="";

}
