import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-log',
  templateUrl: './view-employee-log.component.html',
  styleUrls: ['./view-employee-log.component.css']
})
export class ViewEmployeeLogComponent {
  logData:any=[]
  constructor(private api:ApiService){
    api.empLogView().subscribe(
      (response)=>
      {
      this.logData = response;
      console.log(this.logData);
      
      }
      )
  }
}
