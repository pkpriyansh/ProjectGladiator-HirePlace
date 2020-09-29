import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registerForm:FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      fullName:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$') ]],
      email:['',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobile:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city:['', Validators.required],
      dateOfBirth:['', Validators.required],
      state:['', Validators.required],
      qualification:['', Validators.required],
      yearOfCompletion:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required],
      captcha:['', Validators.required]
    });
  }
  
  onSubmit(){
    alert(JSON.stringify(this.registerForm.value))
  }

}
