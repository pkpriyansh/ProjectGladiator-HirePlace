import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserResultComponent } from './user-result/user-result.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [TestComponent, UserRegistrationComponent, UserLoginComponent, UserResultComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [UserService],
  exports:[UserLoginComponent,UserResultComponent, UserRegistrationComponent,TestComponent]
})
export class UserModule { }
