import { AdminService } from './../admin.service';
import { Router } from '@angular/router';
import { UserService } from './../../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Login } from './../../model/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm:FormGroup;
  login:Login;
  status:boolean;
  
  
  constructor(private http:HttpClient, private service:AdminService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

  }

  onLogin(){
    let email = this.adminLoginForm.controls.username.value;
    let pass = this.adminLoginForm.controls.password.value;
    this.login = new Login(email, pass);

    this.service.loginVerification(this.login).subscribe(res => {

      if (res.status == 200) {
        this.status = true;
        console.log("SUCCESS",res.status)
      }
    },
      err => {
        if (err.status == 200) {
          this.status = true;
          sessionStorage.setItem("Username", email)
          this.router.navigate(['admin-area'])
        }
        else{
          this.status = true;
          console.log("error", err.status)
          console.log("Invalid Credentials");
          alert('Incorrect Id or Password');
          this.adminLoginForm.reset();
        }
      });
  }

}
