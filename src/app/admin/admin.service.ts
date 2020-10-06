import { SearchStudentDto } from './../model/SearchStudentDto';
import { Test } from './../model/Test';
import { Config } from 'protractor';
import { Login } from './../model/login';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  createTest(testForm:FormData):Observable<any>{
    alert(JSON.stringify(testForm))
    return this.http.post('http://localhost:9091/HirePlace/admin/test', testForm);
  }

  getTest():Observable<Test[]>{
    return this.http.get<Test[]>('http://localhost:9091/HirePlace/admin/tests');
  }
  //////////////////////////////////////////////////////////////////////////////////
  loginVerification(login:Login):Observable<HttpResponse<Config>> {
    return this.http.post<Config>("http://localhost:9091/HirePlace/admin/admin-login",login, { observe: 'response' });
  }

  ///////////////////////////////////////////////
  sendDetails(user: SearchStudentDto):Observable<any>{
    return this.http.post('http://localhost:9091/HirePlace/admin/search', user);
  }

  deleteTestById(testId:number):Observable<any>{
    return this.http.delete('http://localhost:9091/HirePlace/admin/deleteTest/'+ testId);
  }
}
