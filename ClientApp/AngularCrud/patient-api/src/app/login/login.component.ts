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
  router: any;
  constructor(private apiService: ApiServiceService//, public model : LoginModel    
    ) { }
  ngOnInit(): void {
    const navigationDetails: string[] = ['/home'];
    
  }
  clickFunction() {
    
    this.apiService.login(this.model)
      .subscribe({
        next: (res) => {
          if(res.statusCode === 200 && res.message==='Success')
          {
            alert('Login success');
          }
          else{
            alert('Login error');
          }
          this.router.navigateByUrl('/home');
        },
      });
  }
}
interface  responseModel
{
   statusCode: number;
   message: string;
   data: string;
  

}
