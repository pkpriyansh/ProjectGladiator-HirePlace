import { Router } from '@angular/router';
import { Login } from './../../model/login';
import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  
  userLoginForm:FormGroup;
  login:Login;
  status:boolean;
  
  
  constructor(private http:HttpClient, private service:UserService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

  }

  onLogin(){
    let email = this.userLoginForm.controls.username.value;
    let pass = this.userLoginForm.controls.password.value;
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
          this.router.navigate(['user-area'])
        }
        else{
          this.status = true;
          console.log("error", err.status)
          console.log("Invalid Credentials");
          alert('Incorrect Id or Password');
          this.userLoginForm.reset();
        }
      });
  }

}
