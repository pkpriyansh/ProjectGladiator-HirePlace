import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { StudentDetailsComponent } from './admin/student-details/student-details.component';
import { CompanyDetailsComponent } from './admin/company-details/company-details.component';
import { AdminAreaComponent } from './admin/admin-area/admin-area.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: 'home', component: HomeComponent},
{path:'adminLogin', component:LoginComponent},
{path:'admin-area', component:AdminAreaComponent},
{path:'company-details', component:CompanyDetailsComponent},
{path:'student-details', component:StudentDetailsComponent},
{path:'registration', component:UserRegistrationComponent},
{path:'user-login', component:UserLoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
