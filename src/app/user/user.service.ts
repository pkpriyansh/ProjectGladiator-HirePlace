import { Password } from './../model/password';
import { CandidateRegistrationDto } from './../model/CandidateRegistrationDto';
import { Login } from './../model/login';
import { TestRegistrationDto } from './../model/TestRegistrationDto';
import { CandidateRegistration } from './../model/CandidateRegistration';
import { QuestionBank } from './../model/questions';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../model/Test';
import { Config } from 'protractor';
import { TestRegistration } from '../model/TestRegistration';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:9091/HirePlace/users/";

  constructor(private http:HttpClient) { }
  getAllLevel1Questions():Observable<QuestionBank[]>{
    return this.http.get<QuestionBank[]>('http://localhost:9091/HirePlace/users/level1/questions/'+sessionStorage.getItem("testid"));
  }
  getAllLevel2Questions():Observable<QuestionBank[]>{
    return this.http.get<QuestionBank[]>('http://localhost:9091/HirePlace/users/level2/questions/'+sessionStorage.getItem("testid"));
  }
  getAllLevel3Questions():Observable<QuestionBank[]>{
    return this.http.get<QuestionBank[]>('http://localhost:9091/HirePlace/users/level3/questions/'+sessionStorage.getItem("testid"));
  }

  getTestById():Observable<Test>{
    return this.http.get<Test>('http://localhost:9091/HirePlace/users/test/'+sessionStorage.getItem("testid"));
  }

  RegisterTest(testRegistration:TestRegistrationDto){
    return this.http.post('http://localhost:9091/HirePlace/users/testRegistration', testRegistration);
  }

  updateTestRegistration(testRegistration:TestRegistrationDto){
    return this.http.put('http://localhost:9091/HirePlace/users/testRegistration', testRegistration);
  }

  getCandidateById(){
    return this.http.get<CandidateRegistration>('http://localhost:9091/HirePlace/users/'+ sessionStorage.getItem("Username"));
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getUserById(email:string):Observable<TestRegistration[]>{
    return this.http.get<TestRegistration[]>(this.baseUrl  + "/result/" + email);
  }

  loginVerification(login:Login):Observable<HttpResponse<Config>> {
    return this.http.post<Config>("http://localhost:9091/HirePlace/users/user-login",login, { observe: 'response' });
  }

  emailVerification(email:string):Observable<string>{
    return this.http.get<string>("http://localhost:9091/HirePlace/users/reset/"  + email); 
  }

  resetPassword(password:Password):Observable<HttpResponse<Config>>{
    return this.http.put<Config>("http://localhost:9091/HirePlace/users/reset/password", password, { observe: 'response' });
  }

  addUserDetails(user: CandidateRegistrationDto):Observable<Object>{
    return this.http.post(this.baseUrl, user);
  }
  getUserDetails(){
    return this.http.get<CandidateRegistration[]>(this.baseUrl);
  }
}
