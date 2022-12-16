import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee-log',
  templateUrl: './add-employee-log.component.html',
  styleUrls: ['./add-employee-log.component.css']
})
export class AddEmployeeLogComponent {
  empCode=""
  entryTime=""
  exitTime=""

  constructor(private api:ApiService,private router:Router){}
  addEntryLog=()=>
  { 
    const date=new Date();
    let data:any={"empCode":this.empCode,"entryTime":date.toLocaleTimeString(),"date":date.toLocaleDateString()}
    let check:any={"empCode":this.empCode}

    console.log(data);
    
    this.api.addEmployeeLog(data).subscribe(
      (response:any)=>{

        // // Employee already on leave check
        // this.api.leaveStatus(check).subscribe(
        //   (response:any)=>{
        //       console.log("Leave status response"+response);
        //       if(response.status==2){
        //         alert("Employee Already on leave")
        //       }
              
        //   }
        // )

        console.log(response);
        if(response.status=="success")
        {
          alert("Log Added Successfully") 
        }
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }

  addExitLog=()=>
  {
    const date=new Date();
    let data:any={"empCode":this.empCode,"exitTime":date.toLocaleTimeString()}

    console.log(data);
    
    this.api.addEmployeeLogExit(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success")
        {
          alert("Exit Log Added Successfully") 
        }
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }
}
