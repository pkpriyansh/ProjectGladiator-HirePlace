import { CandidateRegistration } from './../../model/CandidateRegistration';
import { Test } from './../../model/Test';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Register } from './../user-registration/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  isNoTest:boolean=false;
  test:Test;
  candidate:CandidateRegistration;
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("Username")== null){
      this.router.navigate(['user-login'])
    }
    if(sessionStorage.getItem("testid")=='null'){
      this.isNoTest=true;
    }
    this.userService.getCandidateById().subscribe(
      data=>{
        this.candidate = data;
      }
    )
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['home'])
  }

}
