import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile-emp',
  templateUrl: './profile-emp.component.html',
  styleUrls: ['./profile-emp.component.css']
})
export class ProfileEmpComponent {

  responseData:any=[]
  constructor(private api:ApiService){
    let data:any={"empCode":localStorage.getItem("empInfo")}
    api.searchEmployee(data).subscribe(
      (response:any)=>
      {
      localStorage.setItem("empId",response[0].id)
      this.responseData = response;
      console.log(this.responseData);
      }
      )
  }

}
