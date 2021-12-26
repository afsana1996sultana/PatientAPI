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
        next: (res:string) => {
          console.log(res);
          
        },
        //error: (e) => console.error(e)
      });
  }
}
