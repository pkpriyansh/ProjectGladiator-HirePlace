import { ConvertedQuestions } from './../ConvertedQuestions';
import { Router } from '@angular/router';
import { Questions } from './../questions';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions:Questions[];//level 1 questions
  selectedOptions;;
  recordedOptions=[];
  score:number;
  //Cquestions:ConvertedQuestions[];


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
  submitTest(){
    for(let i=0 ;i <this.questions.length; i++){
      if(this.recordedOptions[i]==this.questions[i].correctoption){
        this.score++;
      }
    }
    if(this.score>=12)
    {
      this.isPassed=true;
      this.testLevel++;
      if(this.testLevel==4){
        this.isLevel4=true
      }
    }
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
    this.timer= setInterval(()=>{
      this.seconds++;
      if(this.seconds==20 && this.isGivingTestFirstTime){
        this.startTest();
      }
      if(this.seconds==1800){
        this.submitTest();
      }
    },1000)
  }

  displayTimeElapsed():string{
    return Math.floor(this.seconds/3600)+ ':' + Math.floor(this.seconds/60)+ ':' +Math.floor(this.seconds%60);
  }
}
