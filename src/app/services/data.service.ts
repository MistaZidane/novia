import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public base_url: string = "http://localhost:8001/";
  constructor(private http: HttpClient) { }

  public getCourses() {
    return this.http.get(`${this.base_url}courses`);
  }

  public createCourse(data: any) {
    return this.http.post(`${this.base_url}courses`, data);
  }

  public deleteCourse(id: string) {
    return this.http.delete(`${this.base_url}courses/${id}`);
  }



  public getCampuses() {
    return this.http.get(`${this.base_url}campus`);
  }
  public getCampuseById(id: string) {
    return this.http.get(`${this.base_url}campus/${id}`);
  }
  public createCampus(name: string) {
    return this.http.post(`${this.base_url}campus`, { name });
  }
  public deleteCampus(id: string) {
    return this.http.delete(`${this.base_url}campus/${id}`);
  }

  public editCampusName(data: any, id: string) {
    console.log(data, "data");

    return this.http.patch(`${this.base_url}campus/${id}`, { name: data });
  }
  public addClassToCampus(data: any) {
    return this.http.post(`${this.base_url}classes`, data);
  }

  public getClassesByCampusId(id: string) {
    return this.http.get(`${this.base_url}classes/${id}`);
  }
  public deleteClass(id: string) {
    return this.http.delete(`${this.base_url}classes/${id}`);
  }
  public getLecturers() {
    return this.http.get(`${this.base_url}lecturer`);
  }

  public deleteLecturer(id: string) {
    return this.http.delete(`${this.base_url}lecturer/${id}`);
  }

  public createLecturer(data: any) {

    return this.http.post(`${this.base_url}lecturer`, data);
  }
  public getDepartments() {
    return this.http.get(`${this.base_url}department`);
  }
  public deleteDepartment(id: string) {
    return this.http.delete(`${this.base_url}department/${id}`);
  }

  public getSemester() {
    return this.http.get(`${this.base_url}semester`);
  }

  public deleteSemester(id: string) {
    return this.http.delete(`${this.base_url}semester/${id}`);
  }

  public createSemester(data: any) {

    return this.http.post(`${this.base_url}semester`, data);
  }
  public createSDepartment(data: any) {

    return this.http.post(`${this.base_url}department`, data);
  }
  public getDepartmentById(id: string) {
    return this.http.get(`${this.base_url}department/${id}`);
  }


  public updateDepartment(id: string, data: any) {
    return this.http.patch(`${this.base_url}department/${id}`, data);
  }
  public getCoursesByDepartment(id: string) {
    return this.http.get(`${this.base_url}courses-by-depart/${id}`);
  }

  public getCoursesInDepartmentById(id: string) {
    return this.http.get(`${this.base_url}course-in-department`, { params: { department: id } });
  }
  public getOneCourseInDepartmentById(id: string) {
    return this.http.get(`${this.base_url}course-in-department/${id}`,);
  }
  public createCourseInDepartment(data: any) {

    return this.http.post(`${this.base_url}course-in-department`, data);
  }
  public editCourseInDepartment(data: any, id: string) {

    return this.http.patch(`${this.base_url}course-in-department/${id}`, data);
  }

  public generate(data: any) {

    return this.http.post(`${this.base_url}seating/${data.campus}/${data.semester}`, {});
  }
  public getseating(semesterId: any, departmentId: any, all: boolean) {
    let url = ``;
    if (all == true) {
      url = `${this.base_url}seating/${semesterId}`;
    }
    else {
      url = `${this.base_url}seating/${semesterId}/${departmentId}`
    }
    return this.http.get(url);
  }

  public getTimeTable(semesterId: any, departmentId: any) {

    return this.http.get(`${this.base_url}table/${semesterId}/${departmentId}`);
  }

}
