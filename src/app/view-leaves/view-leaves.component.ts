import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leaves',
  templateUrl: './view-leaves.component.html',
  styleUrls: ['./view-leaves.component.css']
})
export class ViewLeavesComponent {
  leaveData:any=[]
  statusMessage=""
  constructor(private api:ApiService){
    // let data={"empCode":localStorage.getItem("empId")}
    api.viewAllLeaves().subscribe(
      (response:any)=>
      {
      this.leaveData = response; 
      console.log(this.leaveData);
      }
      )   
  }

  approveClicked=(empCode:any,from_date:any,to_date:any,leave_type:any)=>{
    let decision={"empCode":empCode,"status":2,"id":localStorage.getItem("leaveId"),"fromDate":from_date,"toDate":to_date,"leaveType":leave_type}
    console.log(decision)
    this.api.decideLeaveRequest(decision).subscribe(
      (response:any)=>
      { 
        if(response.message=="failed")
        {
          alert("Employee dosen't have sufficient leave balance")
          this.rejectClicked(decision.empCode)
        }
        else
        {
          if(response.status=="success")
          {
            alert("Leave approved")
          }
          else
          {
            alert("Something wrong happened!")
          }
        }
        
       
      }
    )
  }

  rejectClicked=(empCode:any)=>{
    let decision={"empCode":empCode,"status":-1,"id":localStorage.getItem("leaveId")}
    console.log(decision);
    
    this.api.decideLeaveRequest(decision).subscribe(
      (response:any)=>
      { 
        if(response.message=="failed")
        {
          alert("Leaves exhausted for employee")
        }
        else
        {
          if(response.status=="success")
          {
            alert("Leave Rejected")
          }
          else
          {
            alert("Something wrong happened!")
          }
        }
        
      }
    )
  }

}
