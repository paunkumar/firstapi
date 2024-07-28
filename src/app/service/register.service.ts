import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { APICommon } from '../interface/commonapi.interface';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(registerData:any):Observable<APICommon>{
    return this.http.post<APICommon>(`${environment.BASE_URL}/signup`, registerData);
  }
  loginUser(logindata:any):Observable<APICommon>{
    return this.http.post<APICommon>(`${environment.BASE_URL}/login`, logindata);
  }
  getUser(id:string):Observable<APICommon>{
    return this.http.get<APICommon>(`${environment.BASE_URL}/details/${id}`);
  }
}
