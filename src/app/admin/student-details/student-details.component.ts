import { SearchStudentDto } from './../../model/SearchStudentDto';
import { AdminService } from './../admin.service';
import { TestRegistration } from './../../model/TestRegistration';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  detailsForm : FormGroup;
  students: TestRegistration[];
  constructor(private router:Router, private fb:FormBuilder, private searchService:AdminService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('Username') == null){
      this.router.navigate(['admin-login'])
    }
    this.detailsForm =this.fb.group({
      testId:['', Validators.required],
      state:[''],
      city:[''],
      level:[''],
      marks:['']
    }
    );
  }
 
  
  
  onSubmit(){

    let user:SearchStudentDto = new SearchStudentDto(this.detailsForm.controls.testId.value,
                                                      this.detailsForm.controls.state.value.toUpperCase(),
                                                      this.detailsForm.controls.city.value.toUpperCase(),
                                                      this.detailsForm.controls.level.value,
                                                      this.detailsForm.controls.marks.value);
    
      

    this.searchService.sendDetails(user).subscribe(data =>{
      this.students = data;
      alert(JSON.stringify(this.students));
    });
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['home'])
  }
}
