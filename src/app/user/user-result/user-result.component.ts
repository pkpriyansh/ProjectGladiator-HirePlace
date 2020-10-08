import { Router } from '@angular/router';
import { TestRegistration } from './../../model/TestRegistration';
import { UserService } from './../user.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {

  users:TestRegistration[];
  email:string;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("Username")
    this.userService.getUserById(this.email).subscribe(data => {  
      this.users = data;
      });



  }

  dashboard(){
    this.router.navigate(['user-area'])

  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['home'])
  }

}
