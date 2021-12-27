import { Component, OnInit } from '@angular/core';
import { ApiServiceService, PatientModel } from '../services/api-service.service';

@Component({
  selector: 'app-getappointment',
  templateUrl: './getappointment.component.html',
  styleUrls: ['./getappointment.component.css']
  providers: [ApiServiceService]
})
export class GetappointmentComponent implements OnInit {
  model = new PatientModel();
  constructor(private apiService: ApiServiceService//, public model: PatientModel)
  ) { }
  ngOnInit(): void {
  }
  clickFunction() {
    
    this.apiService.patient(this.model)
      .subscribe({
        next: (res:string) => {
          console.log(res);
          
        },
        //error: (e) => console.error(e)
      });
  }


}
