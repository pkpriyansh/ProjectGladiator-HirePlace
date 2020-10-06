import { CandidateRegistrationDto } from './../../model/CandidateRegistrationDto';
import { CandidateRegistration } from './../../model/CandidateRegistration';

import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registerForm:FormGroup;
  isEmailAlreadyInUse: boolean;
  
  
  constructor(private fb:FormBuilder, private registerService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$') ]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email:['',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobileNumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city:['', Validators.required],
      dateOfBirth:['', Validators.required],
      state:['', Validators.required],
      qualification:['', Validators.required],
      yearOfCompletion:['', [Validators.required, Validators.maxLength(4)]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required]
     
     
    });
  }
  
  onSubmit(){
    let emp:CandidateRegistrationDto = new CandidateRegistrationDto(this.registerForm.controls.firstName.value.toUpperCase(), this.registerForm.controls.lastName.value.toUpperCase(), this.registerForm.controls.email.value, this.registerForm.controls.mobileNumber.value,this.registerForm.controls.city.value.toUpperCase(), this.registerForm.controls.dateOfBirth.value,this.registerForm.controls.state.value.toUpperCase(), this.registerForm.controls.qualification.value, 
      this.registerForm.controls.yearOfCompletion.value, this.registerForm.controls.password.value);

      if (this.registerForm.controls.password.value == this.registerForm.controls.confirmPassword.value) {
        
         
          this.registerService.addUserDetails(emp).subscribe(data => {
            alert("Registration successful"),  this.router.navigate(['home'])
          } ,error => { alert("Email-id already in use")});
            
      } else {
        alert("Entered password and confirm-password are not same")
      }

    
  }

}
