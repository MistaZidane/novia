import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
public data:any;
public loaded = false;
  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((ob:any)=>{


      this.data = ob.docs;
      this.loaded = true;
      console.log(this.data);
      
    })
  }

  getData(){
    this.courseService.getCourses().subscribe(ob=>{
      console.log(ob);
      
    })
  }

}
