import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testId:number;
  constructor(private  router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id');

    this.testId = parseInt(id);
    
    sessionStorage.setItem("testid",id);
    

  }
  admin(){
    this.router.navigate(['adminLogin'])
  }

  
}
