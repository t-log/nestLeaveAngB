import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {
  constructor(private api:ApiService){}
  empCode=""
  empData:any=[]
  flag=false
  readValues=()=>
  {
    let data:any={"empCode":this.empCode}
    console.log(data); 
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        this.flag=true
        console.log(response);
        this.empData=response;
        console.log(this.empData);    
      }
    )
     
  }
}
