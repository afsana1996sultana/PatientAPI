import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
) {}
​
login() {
  let  model : LoginModel;
  model = new LoginModel();
  model.userName="Tanvir";
  model.passwords="Tanvir@1"
    const url = 'https://localhost:44371/api/Login/loginUser'; 
    // this.http.post(url, model).toPromise()
    //     .then((res) => {
    //         console.log(res)
    //         return res;
    //     });
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { model};
    this.http.post<any>('https://localhost:44371/api/Login/loginUser', body, { headers }).subscribe(data => {
        console.log(data);
    });
}   
}

export class LoginModel { 
	public userName: string=""; 
	public passwords:string="";

}
