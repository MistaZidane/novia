import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-department-course',
  templateUrl: './department-course.component.html',
  styleUrls: ['./department-course.component.css']
})
export class DepartmentCourseComponent implements OnInit {
public semesters: any = [];
public lecturers:any = [];
public id:any;
public hasCourses = false;
public dataToBeSaved = [];
public courses:any;
  constructor(private dataService:DataService,  private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param:any)=>{
      console.log(param.id,"pa");
      this.id = param.id

      this.dataService.getCoursesByDepartment(param.id).subscribe((ob:any)=>{
          if(ob.success){
            console.log(ob.docs);
            this.courses = ob.docs;
          }this.hasCourses = true;
      });


      //checking is data has be saved once 
      this.dataService.getCoursesInDepartmentById(param.id).subscribe((ob:any)=>{
        if(ob.success){
          console.log(ob);
          
          if(ob.docs){
            console.log("data exist");
            
          }
          else{
            console.log("Data Does not exist");
            
          }
        }
      })
      
    });


    this.dataService.getSemester().subscribe((ob:any)=>{
      if(ob.success){
        this.semesters = ob.docs;
      }
    });
    this.dataService.getLecturers().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        
      }
    });

   
  }

}
