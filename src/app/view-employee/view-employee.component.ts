import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  empData:any=[]
  constructor(private api:ApiService){
    api.empView().subscribe(
      (response)=>
      {
      this.empData = response;
      console.log(this.empData);
      
      }
      )
  }
}
