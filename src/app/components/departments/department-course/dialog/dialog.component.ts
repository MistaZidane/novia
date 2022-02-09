import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public semesters: any = [];
  public lecturers:any = [];
  public id:any;
  public activeIndex = 0;
  public activeData:any = {};
  public hasCourses = false;
  public courses:any;
  public dataToBeSaved:any = [];
  constructor(private dataService:DataService,  private route: ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: {id: string}) {}

  ngOnInit(): void {

  
    console.log(this.data.id);
    
    this.dataService.getOneCourseInDepartmentById(this.data.id).subscribe((ob:any)=>{
      if(ob.success){
        console.log("okay na");
        console.log( ob.docs);
        
        this.activeData = ob.docs;
        this.lecturers = this.activeData.course.lecturers;
        
      }
    })
    

    this.dataService.getSemester().subscribe((ob:any)=>{
      if(ob.success){
        this.semesters = ob.docs;
      }
    });

   
  }


  saveData(id:string){
    console.log(id);
    console.log(this.dataToBeSaved);
    
      }
    
      selectLecturer(course_id:string,lect_id:string){
        console.log(course_id,lect_id);
        
      }
      selectSemester(course_id:string,semester:string){
        console.log(course_id,semester);
        
      }
      selectDay(course_id:string,day:string){
    
      }
      selectPeriod(course_id:string,period:string){
    
      }
      selectNeedsLab(course_id:string,labState:string){
    console.log(labState);
    
      }
  

}
