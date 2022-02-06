import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getCourses(){
       return this.http.get('http://localhost:8000/courses');
  }

  public createCourse(data:any){
    return this.http.post("http://localhost:8000/courses", data);
  }

  public deleteCourse(id:string){
    return this.http.delete(`http://localhost:8000/courses/${id}`);
  }


public getTimeTable(){
  return this.http.get('http://localhost:8000/table');
}
public getCampuses(){
  return this.http.get('http://localhost:8000/campus');
}
public getCampuseById(id:string){
  return this.http.get(`http://localhost:8000/campus/${id}`);
}
public createCampus(name:string){
  return this.http.post("http://localhost:8000/campus", {name});
}
public deleteCampus(id:string){
  return this.http.delete(`http://localhost:8000/campus/${id}`);
}

public editCampusName(data:any, id:string){
  console.log(data,"data");
  
  return this.http.patch(`http://localhost:8000/campus/${id}`, {name:data});
}
public addClassToCampus(data:any){
  return this.http.post(`http://localhost:8000/classes`, data);
}

public getClassesByCampusId(id:string){
  return this.http.get(`http://localhost:8000/classes/${id}`);
}
public deleteClass(id:string){
  return this.http.delete(`http://localhost:8000/classes/${id}`);
}
public getLecturers(){
  return this.http.get('http://localhost:8000/lecturer');
}

public deleteLecturer(id:string){
  return this.http.delete(`http://localhost:8000/lecturer/${id}`);
}

public createLecturer(data:any){
  
  return this.http.post("http://localhost:8000/lecturer", data);
}
public getDepartments(){
  return this.http.get('http://localhost:8000/department');
}
public deleteDepartment(id:string){
  return this.http.delete(`http://localhost:8000/department/${id}`);
}

public getSemester(){
  return this.http.get('http://localhost:8000/semester');
}

public deleteSemester(id:string){
  return this.http.delete(`http://localhost:8000/semester/${id}`);
}

public createSemester(data:any){
  
  return this.http.post("http://localhost:8000/semester", data);
}
public createSDepartment(data:any){
  
  return this.http.post("http://localhost:8000/department", data);
}
public getDepartmentById(id:string){
  return this.http.get(`http://localhost:8000/department/${id}`);
}


public updateDepartment(id:string, data:any){
  return this.http.patch(`http://localhost:8000/department/${id}`, data);
}
public getCoursesByDepartment(id:string){
  return this.http.get(`http://localhost:8000/courses-by-depart/${id}`);
}

public getCoursesInDepartmentById(id:string){
  return this.http.get(`http://localhost:8000/course-in-department/${id}`, {params:{departId:id}});
}
public createCourseInDepartment(data:any){
  
  return this.http.post("http://localhost:8000/course-in-department", data);
}
}
