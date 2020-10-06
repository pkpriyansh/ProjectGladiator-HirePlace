import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Test } from './../../model/Test';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  tests:Test[];
  constructor( private adminService:AdminService , private router:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('Username') == null){
      this.router.navigate(['admin-login'])
    }

    this.adminService.getTest().subscribe(
      data =>{
        this.tests= data;
      }
    )
  }

  deleteTest(test:Test){
    
    this.adminService.deleteTestById(test.testId).subscribe(
      data => {
        alert("Test Deleted Successfully");
        this.tests = this.tests.filter(u => u !==test);
      }
    )

  }

}
