import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient,) { }

  public getCourses(){
       return this.http.get('http://localhost:8000/courses');
  }
}
