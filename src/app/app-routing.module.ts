import { ResetAreaComponent } from './user/reset-area/reset-area.component';
import { PasswordComponent } from './user/password/password.component';
import { TestDetailsComponent } from './admin/test-details/test-details.component';
import { UserResultComponent } from './user/user-result/user-result.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { LoginComponent } from './login/login.component';
import { UserAreaComponent } from './user/user-area/user-area.component';
import { TestComponent } from './user/test/test.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { StudentDetailsComponent } from './admin/student-details/student-details.component';
import { CompanyDetailsComponent } from './admin/company-details/company-details.component';
import { AdminAreaComponent } from './admin/admin-area/admin-area.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path: '',redirectTo:'/home', pathMatch:'full'},
{path:'about', component: AboutComponent},
{path: 'home', component: HomeComponent},
{path: 'home/:id', component: HomeComponent},
{path:'admin-area', component:AdminAreaComponent},
{path:'company-details', component:CompanyDetailsComponent},
{path:'student-details', component:StudentDetailsComponent},
{path:'registration', component:UserRegistrationComponent},
{path:'test', component:TestComponent},
{path:'user-area', component:UserAreaComponent},
{path:'login', component:LoginComponent},
{path:'user-login', component:UserLoginComponent},
{path:'admin-login', component:AdminLoginComponent},
{path:'user-result', component:UserResultComponent},
{path:'test-details', component:TestDetailsComponent},
{path: 'reset', component:ResetAreaComponent},
{path: 'HirePlace/users/reset/password', component:PasswordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
