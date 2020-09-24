import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:3000/questions";
  constructor(private http:HttpClient) { }
  getAllQuestions():Observable<Questions[]>{
    return this.http.get<Questions[]>(this.baseUrl);
  }
}
