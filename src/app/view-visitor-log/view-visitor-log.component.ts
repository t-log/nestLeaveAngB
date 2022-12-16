import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-visitor-log',
  templateUrl: './view-visitor-log.component.html',
  styleUrls: ['./view-visitor-log.component.css']
})
export class ViewVisitorLogComponent {
  logData:any=[]
  constructor(private api:ApiService){
    api.visitorLogView().subscribe(
      (response)=>
      {
      this.logData = response;
      console.log(this.logData);
      
      }
      )
  }
}
