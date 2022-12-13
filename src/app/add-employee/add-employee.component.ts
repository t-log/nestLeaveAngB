import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empCode=""
  name=""
  designation=""
  email=""
  userName=""
  password=""

  constructor(private api:ApiService,private router:Router){}
  readValues=()=>
  {
    let data:any={"empCode":this.empCode,"name":this.name,"designation":this.designation,"email":this.email,"userName":this.userName,"password":this.password}

    console.log(data);
    
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success")
        {
          alert("Employee Added Successfully") 
        }
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }

}
