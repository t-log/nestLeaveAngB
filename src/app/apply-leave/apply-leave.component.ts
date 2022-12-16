import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {

  fromDate=""
  toDate=""
  leaveType=""
  remarks=""

  constructor(private router:Router,private api:ApiService){}
  readValues=()=>
  {
    let data:any={"status":1,"empCode":localStorage.getItem("empId"),"fromDate":this.fromDate,"toDate":this.toDate,"leaveType":this.leaveType,"remarks":this.remarks}

    console.log(data);
    
    this.api.applyLeave(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success")
        { 
          localStorage.setItem("leaveId",response.leaveId)
          alert("Leave Application Submitted")
          // this.router.navigate(['/leavestatus'])
        }
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }


}
