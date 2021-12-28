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
