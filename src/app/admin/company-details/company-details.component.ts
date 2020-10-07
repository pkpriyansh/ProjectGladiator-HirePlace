import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyForm:FormGroup;
  file:any;
  
  constructor(private fb:FormBuilder, private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('Username') == null){
      this.router.navigate(['admin-login'])
    }

    this.companyForm=this.fb.group({
      testName:['', [Validators.required]],
      companyName:['', Validators.required],
      level1Pass:['', Validators.required],
      level2Pass:['', Validators.required],
      level3Pass:['',Validators.required],
      fileUrl:['', Validators.required],
      examDate:['', Validators.required]

    });
  }

  onFileSelection(event){
    this.file = event.target.files[0];
  }
  
  onSubmit(){
    //alert(JSON.stringify(this.companyForm.value));

    let formData: FormData = new FormData();
    formData.append('testName', this.companyForm.get('testName').value);
    formData.append('companyName', this.companyForm.get('companyName').value);
    formData.append('level1Pass', this.companyForm.get('level1Pass').value);
    formData.append('level2Pass', this.companyForm.get('level2Pass').value);
    formData.append('level3Pass', this.companyForm.get('level3Pass').value);
    formData.append('fileUrl', this.file);
    formData.append('examDate', this.companyForm.get('examDate').value);
    //alert( this.companyForm.get('examDate').value)
    console.log(this.companyForm.get('examDate').value)

    console.log(this.companyForm.controls.examDate.value);
    this.adminService.createTest(formData).subscribe(
      data=>{
        alert("Test Added");
        this.router.navigate(['test-details']);
      },error => { alert("invalid FileFormat")}
    );

  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['home'])
  }
  
}
