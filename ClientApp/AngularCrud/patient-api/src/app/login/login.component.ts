import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiServiceService]
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }
  ngOnInit(): void {
  }
  clickFunction() {
    this.apiService.login();
  }
}
