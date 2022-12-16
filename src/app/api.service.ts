import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(dataToSend:any)=>{return this.http.post("http://localhost:8080/addemp",dataToSend)}
  empView=()=>{return this.http.get("http://localhost:8080/view")}
  deleteEmployee=(dataToSend:any)=>{return this.http.post("http://localhost:8080/deleteemp",dataToSend)}
  searchEmployee=(dataToSend:any)=>{return this.http.post("http://localhost:8080/searchemp",dataToSend)}
  validateEmployee=(dataToSend:any)=>{return this.http.post("http://localhost:8080/loginemp",dataToSend)}
  applyLeave=(dataToSend:any)=>{return this.http.post("http://localhost:8080/applyleave",dataToSend)}
  leaveStatus=(dataToSend:any)=>{return this.http.post("http://localhost:8080/leavestatus",dataToSend)}
  decideLeaveRequest=(dataToSend:any)=>{return this.http.post("http://localhost:8080/decide",dataToSend)}
  viewAllLeaves=()=>{return this.http.get("http://localhost:8080/viewallleaves")}

  addGuard=(dataToSend:any)=>{return this.http.post("http://localhost:8080/addguard",dataToSend)}
  guardView=()=>{return this.http.get("http://localhost:8080/viewguard")}
  validateGuard=(dataToSend:any)=>{return this.http.post("http://localhost:8080/loginguard",dataToSend)}
  searchGuard=(dataToSend:any)=>{return this.http.post("http://localhost:8080/searchguard",dataToSend)}

  addEmployeeLog=(dataToSend:any)=>{return this.http.post("http://localhost:8080/addemplog",dataToSend)}
  addEmployeeLogExit=(dataToSend:any)=>{return this.http.post("http://localhost:8080/addemplogexit",dataToSend)}

  addVisitorLog=(dataToSend:any)=>{return this.http.post("http://localhost:8080/addvisitorlog",dataToSend)}
  addVisitorExitLog=(dataToSend:any)=>{return this.http.post("http://localhost:8080/addvisitorexit",dataToSend)}

  visitorLogView=()=>{return this.http.get("http://localhost:8080/viewvisitorlog")}
  empLogView=()=>{return this.http.get("http://localhost:8080/viewemplog")}
}
