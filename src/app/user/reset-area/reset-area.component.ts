import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-area',
  templateUrl: './reset-area.component.html',
  styleUrls: ['./reset-area.component.css']
})
export class ResetAreaComponent implements OnInit {

  emailForm:FormGroup;
  status:boolean;
  email:string;
  result:any;

  constructor(private http:HttpClient, private service:UserService, private fb:FormBuilder, private router:Router) { }


  ngOnInit(): void {
    this.emailForm = this.fb.group({
      username:['',Validators.required]
    });
  }

  onSend(){
    this.service.emailVerification(this.emailForm.controls.username.value).subscribe(
      data1 => {
        this.result=data1;
        if(this.result == true){
          localStorage.setItem("Username", this.emailForm.controls.username.value);
          alert('Link Successfully Sent');
        }
      }
    )
    
  }

}
