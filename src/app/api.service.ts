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
}
