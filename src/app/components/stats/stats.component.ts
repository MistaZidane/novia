import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public courseNumber = 0;
  public departmentNumber = 0;
  public lecturersNumber = 0;
  public campusNumber = 0;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getLecturers().subscribe((ob:any)=>{
      if(ob.success){
        this.lecturersNumber = ob.docs.length;
      }
    });
    this.dataService.getCourses().subscribe((ob:any)=>{
      if(ob.success){
        this.courseNumber = ob.docs.length;
      }
    });
    this.dataService.getDepartments().subscribe((ob:any)=>{
      if(ob.success){
        this.departmentNumber = ob.docs.length;
      }
    });
    this.dataService.getCampuses().subscribe((ob:any)=>{
      if(ob.success){
        this.campusNumber = ob.docs.length;
      }
    });

  }

}
