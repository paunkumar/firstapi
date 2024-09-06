import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APICommon } from '../interface/commonapi.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor(private http:HttpClient) { }
  getCourse():Observable<APICommon>{
    return this.http.get<APICommon>(`${environment.API_BASE_URL}/admin/course/list`);
  }
}
