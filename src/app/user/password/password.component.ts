import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Password } from './../../model/password';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordForm:FormGroup;
  password:Password;
  result:any;
  status:boolean;

  constructor(private http:HttpClient, private service:UserService, private fb:FormBuilder, private router:Router) { }




  ngOnInit(): void {
    if(localStorage.getItem('Username') == null){
      this.router.navigate(['user-login'])
    }
    this.passwordForm = this.fb.group({
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    });
  }

  onSubmit(){
    alert("submitted called")
    if(this.passwordForm.controls.newPassword.value == this.passwordForm.controls.confirmPassword.value){
      let email = localStorage.getItem('Username');
      let password = this.passwordForm.controls.newPassword.value;
      this.password = new Password(email, password);
      console.log(this.password);
      this.service.resetPassword(this.password).subscribe(res => {

        {
          this.result = res;
        }
      },
        err => {
          if (err.status == 200) {
            this.status = true;
            alert('Password Changed Successfully')
            localStorage.clear();
            this.router.navigate(['user-login'])
          }
          else{
            this.status = true;
            console.log("error", err.status)
            alert('Some technical issue occured!!')
            this.passwordForm.reset();
          }
        });
      
    }
    else{
      alert("Password Does Not Match");
      this.passwordForm.reset();
    }
  }

}
