import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserResultComponent } from './user-result/user-result.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAreaComponent } from './user-area/user-area.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PasswordComponent } from './password/password.component';
import { ResetAreaComponent } from './reset-area/reset-area.component';

@NgModule({
  declarations: [TestComponent, UserRegistrationComponent,  
    UserResultComponent, UserAreaComponent,UserAreaComponent, UserLoginComponent, PasswordComponent, ResetAreaComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  exports:[UserResultComponent, UserRegistrationComponent,
    TestComponent,UserAreaComponent,UserLoginComponent, ResetAreaComponent, PasswordComponent]
})
export class UserModule { }
