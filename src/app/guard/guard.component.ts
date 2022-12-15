import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent {
  email=""
  password=""
  empData:any=[]
  constructor(private api:ApiService,private router:Router){}
  checkValues=()=>{
    let data = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.validateGuard(data).subscribe(
      (response:any)=>{
        console.log(response);
          
        if(response.status=="success"){
          this.empData=response
          localStorage.setItem("guardInfo",response.empCode)
          this.router.navigate(['/guardprofile'])
        }
        else{
        alert(response.message)
        }
      }
    )
  }
}
