import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-guard',
  templateUrl: './view-guard.component.html',
  styleUrls: ['./view-guard.component.css']
})
export class ViewGuardComponent {
  guardData:any=[]
  constructor(private api:ApiService){
    api.guardView().subscribe(
      (response)=>
      {
      this.guardData = response;
      console.log(this.guardData);
      
      }
      )
  }

}
