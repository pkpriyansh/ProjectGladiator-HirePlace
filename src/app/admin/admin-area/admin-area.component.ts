import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('Username') == null){
      this.router.navigate(['admin-login'])
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['home'])
  }

}
