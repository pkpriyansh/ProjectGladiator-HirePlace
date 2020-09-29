import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [ AdminAreaComponent, CompanyDetailsComponent, StudentDetailsComponent, AdminLoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[AdminAreaComponent,StudentDetailsComponent,CompanyDetailsComponent,AdminLoginComponent]
})
export class AdminModule { }
