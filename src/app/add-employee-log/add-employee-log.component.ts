import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee-log',
  templateUrl: './add-employee-log.component.html',
  styleUrls: ['./add-employee-log.component.css']
})

export class AddEmployeeLogComponent {
  constructor(private api:ApiService,private router:Router){}
  empCode=""
  entryTime=""
  exitTime=""

  addEntryLog=()=>
  { 
    const date=new Date()
    let convertedDate = date.toLocaleDateString()
    const [month,day,year] = convertedDate.split('/')
    const result = [year,month,day].join('-')

    let data:any={"empCode":this.empCode,"entryTime":date.toLocaleTimeString(),"date":result}
    // let check:any={"empCode":this.empCode}
   
console.log(result);

    console.log(data);
    
    this.api.addEmployeeLog(data).subscribe(
      (response:any)=>{

        
        console.log(response);
        if(response.status=="success")
        {
          alert("Log Added Successfully") 
        }  
        else if(response.status=="failed"){
          alert("Employee on leave!")
        }
        else
        {
          alert("Something wrong happened")
        }
        
      }
    )
     
  }

  addExitLog=()=>
  { 
    const date=new Date()
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
