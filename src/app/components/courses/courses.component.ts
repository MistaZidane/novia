import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
public data = [];
  constructor(public courseService: CourseService) { }

  ngOnInit(): void {

  }

  getData(){
    this.courseService.getCourses().subscribe(ob=>{
      console.log(ob);
      
    })
  }

}