import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [LoginComponent, AdminAreaComponent, CompanyDetailsComponent, StudentDetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[LoginComponent,AdminAreaComponent,StudentDetailsComponent,CompanyDetailsComponent]
})
export class AdminModule { }
