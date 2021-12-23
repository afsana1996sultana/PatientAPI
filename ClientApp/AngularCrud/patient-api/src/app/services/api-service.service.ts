import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:44371/api/';
//const baseUrl = 'http://localhost:47822/api/Patient/gettest';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
) {}
login() : Observable<string>{
  let  model : LoginModel;
  model = new LoginModel();
  model.userName="Tanvir";
  model.passwords="Tanvir@1";
  return this.http.post<string>(`${baseUrl}Login/loginUser`, model);

}   
get(): Observable<string> {
  return this.http.get<string>(`${baseUrl}`);
}
}

export class LoginModel { 
	public userName: string=""; 
	public passwords:string="";

}
