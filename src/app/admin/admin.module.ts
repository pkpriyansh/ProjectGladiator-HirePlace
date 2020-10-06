import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestDetailsComponent } from './test-details/test-details.component';



@NgModule({
  declarations: [ AdminAreaComponent, CompanyDetailsComponent, StudentDetailsComponent, AdminLoginComponent, TestDetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[AdminAreaComponent,StudentDetailsComponent,CompanyDetailsComponent,AdminLoginComponent,TestDetailsComponent]
})
export class AdminModule { }
