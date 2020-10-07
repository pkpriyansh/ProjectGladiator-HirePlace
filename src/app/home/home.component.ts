import { Test } from './../model/Test';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { homedir } from 'os';
import { DatePipe, formatDate } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testId:number;
  test:Test
  constructor(private  router:Router, private route:ActivatedRoute, private home:UserService) { }

  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id');

    this.testId = parseInt(id);
    sessionStorage.setItem("testid",id);
    this.home.getTestById().subscribe(
      data =>{
        this.test = data;
        //var todayDate = new Date();
        //var newTodayDate =this.datepipe.transform(todayDate, 'yyyy-MM-dd');
        if(this.test !=null){
          let todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
          let testDate = formatDate(this.test.lastDate, 'yyyy-MM-dd', 'en_US');
          //alert("test if condition")
          if(todayDate != testDate){
            //alert("date if condition")
            sessionStorage.clear();
            this.router.navigate(['home']);
          }else{
            alert("welcome");
          }
        }else{
          sessionStorage.clear();
            this.router.navigate(['home']);
        }
      }
    )
    
    

  }
  admin(){
    this.router.navigate(['adminLogin'])
  }

  
}
