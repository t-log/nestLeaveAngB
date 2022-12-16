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
import { EmployeeComponent } from './employee/employee.component';
import { ProfileEmpComponent } from './profile-emp/profile-emp.component';
import { NavBarEmployeeComponent } from './nav-bar-employee/nav-bar-employee.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { ViewLeavesComponent } from './view-leaves/view-leaves.component';
import { AddguardComponent } from './addguard/addguard.component';
import { ViewGuardComponent } from './view-guard/view-guard.component';
import { GuardComponent } from './guard/guard.component';
import { GuardDashboardComponent } from './guard-dashboard/guard-dashboard.component';
import { NavBarGuardComponent } from './nav-bar-guard/nav-bar-guard.component';
import { AddEmployeeLogComponent } from './add-employee-log/add-employee-log.component';
import { AddVisitorLogComponent } from './add-visitor-log/add-visitor-log.component';
import { ViewVisitorLogComponent } from './view-visitor-log/view-visitor-log.component';
import { ViewEmployeeLogComponent } from './view-employee-log/view-employee-log.component';
import { MainPageComponent } from './main-page/main-page.component';

const myRoute:Routes=[{path:"",component:MainPageComponent},
                      {path:"admin",component:AdminComponent},
                      {path:"admindash",component:AdminDashboardComponent},
                      {path:"addemp",component:AddEmployeeComponent},
                      {path:"empview",component:ViewEmployeeComponent},
                      {path:"empdelete",component:DeleteEmployeeComponent},
                      {path:"empsearch",component:SearchEmpComponent},
                      {path:"emp",component:EmployeeComponent},
                      {path:"empprofile",component:ProfileEmpComponent},
                      {path:"applyleave",component:ApplyLeaveComponent},
                      {path:"leavestatus",component:LeaveStatusComponent},
                      {path:"viewleave",component:ViewLeavesComponent},
                      {path:"addguard",component:AddguardComponent},
                      {path:"viewguard",component:ViewGuardComponent},
                      {path:"guardlogin",component:GuardComponent},
                      {path:"guardprofile",component:GuardDashboardComponent},
                      {path:"addemplog",component:AddEmployeeLogComponent},
                      {path:"addvisitorlog",component:AddVisitorLogComponent},
                      {path:"viewemplog",component:ViewEmployeeLogComponent},
                      {path:"viewvisitorlog",component:ViewVisitorLogComponent},
                      ]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDashboardComponent,
    NavBarAdminComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    DeleteEmployeeComponent,
    SearchEmpComponent,
    EmployeeComponent,
    ProfileEmpComponent,
    NavBarEmployeeComponent,
    ApplyLeaveComponent,
    LeaveStatusComponent,
    ViewLeavesComponent,
    AddguardComponent,
    ViewGuardComponent,
    GuardComponent,
    GuardDashboardComponent,
    NavBarGuardComponent,
    AddEmployeeLogComponent,
    AddVisitorLogComponent,
    ViewVisitorLogComponent,
    ViewEmployeeLogComponent,
    MainPageComponent
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
