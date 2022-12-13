import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  userName=""
  password=""

  constructor(private router:Router){}

  readAdminValues=()=>
  {
    let adminData:any = {"username":this.userName,"password":this.password}
    console.log(adminData)
    if (this.userName =="admin" && this.password =="12345") {
      this.router.navigate(['/admindash'])    
    }else
    {
      alert("Invalid Login")
      this.userName=""
      this.password=""
    }
  }
}
