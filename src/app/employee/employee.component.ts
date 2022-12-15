import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  email=""
  password=""
  empData:any=[]
  constructor(private api:ApiService,private router:Router){}
  checkValues=()=>{
    let data = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.validateEmployee(data).subscribe(
      (response:any)=>{
        console.log(response);
          
        if(response.status=="success"){
          this.empData=response
          localStorage.setItem("empInfo",response.empCode)
          this.router.navigate(['/empprofile'])
        }
        else{
        alert("Login Failed!:(")
        alert(response.message)
        }
      }
    )
  }
}
