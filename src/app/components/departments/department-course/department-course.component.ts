import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-department-course',
  templateUrl: './department-course.component.html',
  styleUrls: ['./department-course.component.css']
})
export class DepartmentCourseComponent implements OnInit {
public semesters: any = [];
public lecturers:any = [];
public id:any;
public departName = '';
public activeIndex = 0;

public hasCourses = false;
public dataToBeSaved:any = [];
public courses:any;
  constructor(private dataService:DataService,  private route: ActivatedRoute,public dialog: MatDialog ) { }

  ngOnInit(): void {

  
    
    this.route.params.subscribe((param:any)=>{
      console.log(param.id,"pa");
      this.id = param.id

      this.dataService.getCoursesByDepartment(param.id).subscribe((ob:any)=>{
          if(ob.success){
            console.log(ob.docs);

            
          }
      });
      this.dataService.getDepartmentById(this.id).subscribe((depart:any)=>{
        if(depart.success){
          this.departName = depart.docs.name;
        }
      })

      //checking is data has be saved once 
      this.dataService.getCoursesInDepartmentById(param.id).subscribe((ob:any)=>{
        if(ob.success){
          console.log(ob);
          
          if(ob.docs.length>0){
            console.log("data exist Looooooooll");
            this.courses = ob.docs;
            console.log(ob.docs);

            this.hasCourses = true;
          }
          else{
            console.log("Data Does not exist");
            
          }
        }
        else{
          console.log("erroooo");
          
        }
      })
      
    });


  }



  openDialog(id:string) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
