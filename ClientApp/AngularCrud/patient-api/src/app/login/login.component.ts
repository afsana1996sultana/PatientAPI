import { Component, OnInit } from '@angular/core';
import { ApiServiceService, LoginModel } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiServiceService]
})
export class LoginComponent implements OnInit {
  model = new  LoginModel();
  constructor(private apiService: ApiServiceService//, public model : LoginModel    
    ) { }
  ngOnInit(): void {
    
  }
  clickFunction() {
    
    this.apiService.login(this.model)
      .subscribe({
        next: (res) => {
          //console.log(res);
         
          //let response : responseModel  = JSON.parse(res);
          if(res.statusCode === 200 && res.message==='Success')
          {
            alert('Login success');
          }
          else{
            alert('Login error');
          }
        },
        //error: (e) => console.error(e)
      });
  }
}
interface  responseModel
{
   statusCode: number;
   message: string;
   data: string;
  

}
