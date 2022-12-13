import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';

const myRoute:Routes=[{path:"",component:AdminComponent},
                      {path:"admindash",component:AdminDashboardComponent},
                      {path:"addemp",component:AddEmployeeComponent},
                      {path:"empview",component:ViewEmployeeComponent},
                      {path:"empdelete",component:DeleteEmployeeComponent},
                      {path:"empsearch",component:SearchEmpComponent}]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDashboardComponent,
    NavBarAdminComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    DeleteEmployeeComponent,
    SearchEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
