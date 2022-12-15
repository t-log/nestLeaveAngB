import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-guard-dashboard',
  templateUrl: './guard-dashboard.component.html',
  styleUrls: ['./guard-dashboard.component.css']
})
export class GuardDashboardComponent {
  responseData:any=[]
  constructor(private api:ApiService){
    let data:any={"empCode":localStorage.getItem("guardInfo")}
    api.searchGuard(data).subscribe(
      (response:any)=>
      {
      localStorage.setItem("empId",response[0].id)
      this.responseData = response;
      console.log(this.responseData);
      }
      )
  }
}
