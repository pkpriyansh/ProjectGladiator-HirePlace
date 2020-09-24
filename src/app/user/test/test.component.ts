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
  questions:Questions[];
  selectedOptions;;
  recordedOptions=[0,0,0,0,0,0,0,0,0,0];
  score:number;
  //Cquestions:ConvertedQuestions[];
  hideSubmit:boolean;
  hideNext:boolean;
  seconds:number;
  timer;
  qProgress:number;
  correctAns:number;
  constructor(private testService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.hideSubmit=true;
    this.hideNext=false;
    this.selectedOptions=[false,false,false,false];
    this.score=0;
    this.correctAns=0;
    this.seconds=0;
    this.qProgress=0;
   // this.startTimer();
    this.testService.getAllQuestions().subscribe(
      data=>{
        console.log(data);
        this.questions=data;
        console.log(this.questions.length)
      console.log(this.questions.length)
      this.startTimer();
    }
    );
      console.log("hello")
  }
  startTimer(){
    this.timer= setInterval(()=>{
      this.seconds++;
    },1000)
  }
  answer(id:number){
    this.recordedOptions[this.qProgress]=id+1;
    console.log(this.recordedOptions[this.qProgress]);
    for(let i=0; i<4;i++){
      if(i==id)
      this.selectedOptions[i]=true;
      else
      this.selectedOptions[i]=false;
    }
  }

  nav(value:boolean){
    if(value && this.qProgress<9){
      this.qProgress++
      if(this.qProgress==9){
        this.hideNext=true;
        this.hideSubmit=false
      }
      this.selectedOptions=[false,false,false,false];
    }else if(!value)
    {
      if(this.qProgress!=0)
      {
        this.qProgress--;
        for(let i=0; i<4;i++){
          if(i==(this.recordedOptions[this.qProgress-1]-1))
          this.selectedOptions[i]=true;
          else
          this.selectedOptions[i]=false;
        }
      }
    }
    
   
  }
  submitTest(){
    for(let i=0 ;i <10; i++){
      if(this.recordedOptions[i]==this.questions[i].correctoption){
        this.score++;
      }
    }
    this.hideSubmit=true;
  }
  displayTimeElapsed():string{
    return Math.floor(this.seconds/3600)+ ':' + Math.floor(this.seconds/60)+ ':' +Math.floor(this.seconds%60);
  }
}
