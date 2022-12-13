import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  constructor(private api:ApiService){}
  empCode=""
  readValues=()=>
  {
    let data:any={"empCode":this.empCode}
    console.log(data); 
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success")
        {
          alert("Employee Deleted Successfully") 
        }
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }

}
