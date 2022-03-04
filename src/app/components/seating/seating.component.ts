import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {
  public showSemester:boolean = false;
  public showDepartment:boolean = false;
  public departments:any = [];
  public semesterId = "";
  public departmentId = "";
  public semesters:any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDepartments().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        if(ob.docs.length > 0){
           this.showDepartment = true;
        this.departments =ob.docs;
        this.departmentId = ob.docs[0]._id;
        }
       
      }
    });
    this.dataService.getSemester().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        if(ob.docs.length > 0){
        this.showSemester = true;
        this.semesters = ob.docs;
        this.semesterId = ob.docs[0]._id;
        }
      }
    });

  }
getData(){
  console.log("getting data using" , this.departmentId, this.semesterId);
  
}

selectSemester(event:any){
this.semesterId =event.target.value;
this.getData();

}
selectDepartment(event:any){
  this.departmentId =event.target.value;
  this.getData();
  }
}
