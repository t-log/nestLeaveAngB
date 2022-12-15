import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addguard',
  templateUrl: './addguard.component.html',
  styleUrls: ['./addguard.component.css']
})
export class AddguardComponent {

  empCode=""
  name=""
  email=""
  userName=""
  password=""
  phoneNo=""

  constructor(private api:ApiService,private router:Router){}
  readValues=()=>
  {
    let data:any={"empCode":this.empCode,"phoneNo":this.phoneNo,"name":this.name,"email":this.email,"userName":this.userName,"password":this.password}

    console.log(data);
    
    this.api.addGuard(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success")
        {
          alert("Guard Added Successfully") 
        }
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }

}
