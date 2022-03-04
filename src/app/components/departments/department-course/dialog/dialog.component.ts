import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

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
  public hasData = false;
  public lecturerName = '';  
  public hasSemester = false;
  public SemesterName = '';  
  public periods:any = [];
  public days:any = [];
  public semester:any;
  public needsLab: any;
  public courses:any;
  public dataToBeSaved:any = {

  };
  constructor(private dataService:DataService,  private route: ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: {id: string},private toastr: ToastrService) {}

  ngOnInit(): void {

  
    console.log(this.data.id);
    
    this.dataService.getOneCourseInDepartmentById(this.data.id).subscribe((ob:any)=>{
      if(ob.success){
        
        this.activeData = ob.docs;
        this.hasData = true;
        console.log("okay na");
      this.lecturerName = ob.docs.course.lecturers.find((el:any)=>{
         return el._id = ob.docs.lecturer;
        }).name;
       
        console.log(this.lecturerName,'name');
        console.log(ob.docs);
        
        this.days = [this.activeData.day];
        this.periods = this.activeData.periods[0];
        this.needsLab = this.activeData.needsLab;
        console.log(typeof this.days,"type");
        // Object.keys(this.activeData).forEach((element:any) => {
        //   console.log(element);
          
        // });
        
        this.lecturers = this.activeData.course.lecturers;
        // getting and setting semesters
        this.dataService.getSemester().subscribe((obs:any)=>{
          if(obs.success){
            this.semesters = obs.docs;
            if(this.semesters.length >0){
              this.hasSemester = true;
            }
            this.SemesterName = obs.docs.find((el:any)=>{
              console.log(el,"el");
              
              return el._id == this.activeData.semester;
             }).name;
             console.log(this.activeData.semester,"wwwwd");
             
             console.log(this.semesters,'semesters');
             
          }
        });
      }
    })
    



   
  }


  saveData(form:any){
  console.log(form);
  
    
  }
  editInfo(){
    console.log(this.activeData);
    // semester+day+period+department
    console.log(this.activeData.semester+this.activeData.day+this.activeData.periods);
let actualPeriod:any = [];
this.activeData.periods.split(',').forEach((element:any) => {

  actualPeriod.push(parseInt(element));
  
});

this.activeData.periods = actualPeriod;
    this.dataService.editCourseInDepartment(this.activeData, this.data.id).subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.toastr.success("Saved","saved");
    
      }
    })
    
    
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
