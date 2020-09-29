import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:3000/";
  constructor(private http:HttpClient) { }
  getAllLevel1Questions():Observable<Questions[]>{
    return this.http.get<Questions[]>(this.baseUrl+"questions1");
  }
  getAllLevel2Questions():Observable<Questions[]>{
    return this.http.get<Questions[]>(this.baseUrl+"questions2");
  }
  getAllLevel3Questions():Observable<Questions[]>{
    return this.http.get<Questions[]>(this.baseUrl+"questions3");
  }
}
