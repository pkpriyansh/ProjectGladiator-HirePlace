import { TestRegistrationDto } from './../../model/TestRegistrationDto';
import { CandidateRegistration } from './../../model/CandidateRegistration';
import { Test } from './../../model/Test';
import {  QuestionBank } from './../../model/questions';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  questions:QuestionBank[];
  testRegistration:TestRegistrationDto;
  candidate:CandidateRegistration;
  test:Test;
  selectedOptions;
  recordedOptions=[];
  score:number;
 // level1Score:number;
  //level2Score:number;
  //level3Score:number;


  hideSubmit:boolean;
  hideNext:boolean;
  hideBack:boolean;
  seconds:number;
  timer:number;


  qProgress:number;
  correctAns:number;

  isSubmit:boolean;

  hideTest:boolean;

  isPassed:boolean;

  testLevel:number;

  isLevel4:boolean;
  
  isGivingTestFirstTime:boolean;

  constructor(private testService:UserService, private router: Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("Username")== null){
      this.router.navigate(['user-login'])
    }

    this.testRegistration = new TestRegistrationDto();

    this.isGivingTestFirstTime=true
    this.isLevel4=false;
    this.testLevel=1;
    this.hideTest=false;
    this.isSubmit=false;
    this.hideBack=false;
    this.hideSubmit=true;
    this.hideNext=false;
    this.selectedOptions=[false,false,false,false];
    this.score=0;
    this.correctAns=0;
    this.seconds=0;
    this.timer=0;
    this.qProgress=0;
   // this.startTimer();
   this.testService.getTestById().subscribe(
    data=>{
      this.test=data;
      //console.log(JSON.stringify(this.test))
    });
    this.testRegistration.email =sessionStorage.getItem("Username");
    this.testRegistration.testId = parseInt(sessionStorage.getItem("testid"));
    
    this.testService.RegisterTest(this.testRegistration).subscribe(
      data =>{
        console.log("done Registration");
      },error => {
        alert("You Can Not Give THe Test Again");
        this.router.navigate(['user-area'])}
    );
    this.testService.getAllLevel1Questions().subscribe(
      data=>{
        //console.log(data);
        this.questions=data;
        this.startTimer();
    }
    );
    this.testLevel=1;
  }
 
  answer(id:number){
    this.recordedOptions[this.qProgress]=id+1;
    for(let i=0; i<4;i++){
      if(i==id)
      this.selectedOptions[i]=true;
      else
      this.selectedOptions[i]=false;
    }
  }

  nav(value:boolean){
    if(value && this.qProgress<this.questions.length){
      this.qProgress++
      if(this.qProgress==this.questions.length-1){
        this.hideNext=true;
        this.hideSubmit=false
      }
    }else if(!value && this.qProgress!=0 )
    {
        this.qProgress--;
        this.hideSubmit=true;
        this.hideNext=false;
    }
    for(let i=0; i<4;i++){
      if(i==(this.recordedOptions[this.qProgress]-1))
      this.selectedOptions[i]=true;
      else
      this.selectedOptions[i]=false;
    }
   
  }

  logout(){
    this.testService.updateTestRegistration(this.testRegistration).subscribe(
      data=>{
        console.log("level1")
      }
    );
    sessionStorage.clear();
    this.router.navigate['home'];
  }
  
  submitTest(){
    for(let i=0 ;i <this.questions.length; i++){
      if(this.recordedOptions[i]==this.questions[i].correctOption){
        this.score++;
      }
    }
    /* if(this.testLevel==4){
      this.isLevel4=true
    }*/
   
    if(this.testLevel==1)
    {
      this.score=this.score*5;
      this.testRegistration.level1Score=this.score;
      this.testService.updateTestRegistration(this.testRegistration).subscribe(
        data=>{
          console.log("level1")
        }
      );
      console.log("inside level 1")
      if(this.testRegistration.level1Score>=this.test.level1Pass)
      {
        
        console.log("passing condition")
        this.isPassed=true;
      }
    }
    if(this.testLevel==2)
    {
      this.score=this.score*5;
      this.testRegistration.level2Score=this.score;
      this.testService.updateTestRegistration(this.testRegistration).subscribe(
        data=>{
          console.log("level2")
        }
      )
      if(this.testRegistration.level2Score>this.test.level2Pass)
      {
        this.isPassed=true;
      }
    }
    if(this.testLevel==3)
    {
      this.score=this.score*5;
      this.testRegistration.level3Score=this.score;
     this.testService.updateTestRegistration(this.testRegistration).subscribe(
        data=>{
          console.log("level3")
        }
      );
      if(this.testRegistration.level3Score>=this.test.level3Pass)
      {
        this.isPassed=true;
      }
    }
    /*if(this.score>=5 && this.testLevel==2)
    {
      this.level2Score=this.score;
      this.isPassed=true;
      this.testLevel++;
    }
    if(this.score>=2 && this.testLevel==3)
    {
      this.level3Score=this.score;
      this.isPassed=true;
      this.testLevel++;
      if(this.testLevel==4){
        this.isLevel4=true
      }
    }*/
    this.testLevel++;
    this.hideTest=true;
    this.isSubmit=false;
    this.hideBack=false;
    this.hideSubmit=true;
    this.hideNext=false;
    this.selectedOptions=[false,false,false,false];
    
    this.correctAns=0;
    this.seconds=0;
    this.timer=0;
    this.qProgress=0;
    this.recordedOptions.fill(0,0,this.questions.length-1);
    if(this.testLevel==4){
      this.isLevel4=true
    }
  }


  indexSelect(i:number){
    this.qProgress=i;
    if(this.qProgress==this.questions.length-1){
      this.hideNext=true;
      this.hideSubmit=false;

    }else{
      this.hideNext=false;
      this.hideSubmit=true;
    }

    for(let i=0; i<4;i++){
      if(i==(this.recordedOptions[this.qProgress]-1))
      this.selectedOptions[i]=true;
      else
      this.selectedOptions[i]=false;
    }
  }
   
  nextTest(){
    if(this.testLevel==2){
      this.score=0;
      this.testService.getAllLevel2Questions().subscribe(
        data=>{
          //console.log(data);
          this.questions=data;
          this.hideTest=false;
          this.isPassed=false;
          this.startTimer();
      }
      );
    }
    if(this.testLevel==3){
      this.score=0;
      this.testService.getAllLevel3Questions().subscribe(
        data=>{
         // console.log(data);
          this.questions=data;
          this.hideTest=false;
          this.isPassed=false;
          this.startTimer();
      }
      );
    }
  }

  startTest(){
    this.isGivingTestFirstTime=false;
    this.seconds=0;
    this.startTimer();
  }

  startTimer(){
    this.timer= window.setInterval(()=>{
      this.seconds++;
      if(this.seconds==20 && this.isGivingTestFirstTime){
        this.startTest();
      }
      if(this.seconds==1800){
        this.submitTest();
      }
      },2000)
    
  }

  displayTimeElapsed():string{
    return Math.floor(this.seconds/3600)+ ':' + (29-Math.floor(this.seconds/60))+ ':' + (60-Math.floor(this.seconds%60));
  }
}
