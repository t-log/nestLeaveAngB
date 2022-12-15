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
  constructor(private api:ApiService){
    let data={"empCode":localStorage.getItem("empId")}
    api.leaveStatus(data).subscribe(
      (response:any)=>
      { 
        
        if(response[0].status==1)
        {
          this.statusMessage="Awaiting approval"
          console.log(this.statusMessage);  
        }
        else if(response[0].status==2)
        {
          this.statusMessage="Accepted"
          console.log(this.statusMessage);  
        }
        else if(response[0].status==-1)
        {
          this.statusMessage="Rejected"
          console.log(this.statusMessage);  
        }
      this.leaveData = response;
      console.log(this.leaveData);
      }
      )
     
  }
}
