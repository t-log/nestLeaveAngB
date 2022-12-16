import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {
  
  leaveData:any=[]
  statusMessage=""
  counter=0
  constructor(private api:ApiService){
    let data={"empCode":localStorage.getItem("empId")}
    api.leaveStatus(data).subscribe(
      (response:any)=>
      { 
      for(let i of response)
      {
        this.leaveData[this.counter] = response[this.counter];
        this.counter++
      } 
      }
      )
     
  }
}
