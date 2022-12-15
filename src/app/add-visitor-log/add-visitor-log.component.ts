import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-visitor-log',
  templateUrl: './add-visitor-log.component.html',
  styleUrls: ['./add-visitor-log.component.css']
})
export class AddVisitorLogComponent {
  name=""
  purpose=""
  whomToMeet=""


  constructor(private api:ApiService,private router:Router){}
  addEntryLog=()=>
  { 
    const date=new Date();
    let data:any={"name":this.name,"purpose":this.purpose,"whomToMeet":this.whomToMeet,"entryTime":date.toLocaleTimeString()}

    console.log(data);
    
    this.api.addVisitorLog(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success")
        {
          alert("Visitor Log Added Successfully")
          localStorage.setItem("VisitorId",response.visitorId)
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
    let data:any={"id":localStorage.getItem("VisitorId"),"exitTime":date.toLocaleTimeString()}

    console.log(data);
    
    this.api.addVisitorExitLog(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success")
        {
          alert("Visitor Exit Log Added Successfully") 
        }
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }
}
