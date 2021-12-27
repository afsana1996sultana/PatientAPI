import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const baseUrl = 'https://localhost:44371/api/';
//const baseUrl = 'http://localhost:47822/api/Patient/gettest';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
) {}
login(model:LoginModel) : Observable<any>{
 
  return this.http.post<any>(`${baseUrl}Login/loginUser`, model);
  
}   
get(): Observable<string> {
  return this.http.get<string>(`${baseUrl}`);
}
addPatient(model:any):Observable<string>
  {
    return this.http.post<string>(`${baseUrl}Patient/add_patient`, model);
  }
}

export class LoginModel { 
	public userName: string=""; 
	public passwords:string="";

}


// export class ApiServiceService {

//   constructor(
//     private http: HttpClient
// ) {}
// add(model:PatientModel) : Observable<string>{
 
//   return this.http.post<string>(`${baseUrl}Patient/add_patient`, model);

// }   
// get(): Observable<string> {
//   return this.http.get<string>(`${baseUrl}`);
// }
// }

// export class PatientModel { 
// 	public Country: string=""; 
// 	public City:string="";
//   public CountryTravelingTo:string="";
//   public MedicalCenter:string="";
//   public FirstName:string="";
//   public LastName:string="";
//   public DateOfBirth:string="";
//   public Nationality:string="";
//   public Gender:string="";
//   public MaritalStatus:string="";
//   public EmailId:string="";
//   public PhoneNo:string="";
//   public NationalId:string="";
//   public PassportNo:string="";
//   public ConfirmPassportNo:string="";
//   public PassportIssueDate:string="";
//   public PassportIssuePlace:string="";
//   public PassportExpiryDate:string="";
//   public VisaType:string="";
//   public PositionAppliedFor:string="";
//   public Other:string="";

// }
