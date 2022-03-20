import {  Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {
  public showSemester:boolean = false;
  public showDepartment:boolean = false;
  public hasGeneratedData: boolean = false;
  public departments:any = [];
  public tableData:any = [];
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
        this.dataService.getSemester().subscribe((obs:any)=>{
          if(obs.success){
            console.log(obs.docs);
            if(obs.docs.length > 0){
            this.showSemester = true;
            this.semesters = obs.docs;
            this.semesterId = this.semesters[0]._id;
           
            this.hasGeneratedData = true;
            this.getData(true);
            }
          }
        });
        // this.departmentId = ob.docs[0]._id;
        }
       
      }
    });
  

  }
  // ngAfterViewInit(){
  //   console.log("afterview");
    
  //   if( this.showSemester){
  //     console.log("ascs");
      
     
  //   }
  // }
getData(all:boolean){
  
  // console.log("getting data using" , this.departmentId, this.semesterId);
  this.dataService.getseating(this.semesterId,this.departmentId, all).subscribe((ob:any)=>{
    if(ob.success){
      console.log(ob.docs);
      if(ob.docs.length >0){
        this.hasGeneratedData = true;
        let daysInweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        ob.docs.forEach((depart:any)=>{
          console.log(depart,"depart");
          
          depart.table.forEach((element:any) => {
            console.log(element);
            daysInweek.forEach((day:any)=>{
              // console.log(Object.keys(element).join().toLowerCase().split(''));
              
              if(Object.keys(element).includes(day)){
                console.log("found");
                if(element[day].morning == undefined){
                  element[day].morning = "_"
                }
                if(element[day].afternoon == undefined){
                  element[day].afternoon = "_"
                  console.log("afternoon", day);
                  
                }
                
              }
              else{
                element[day] = {
                  morning:"_",
                  afternoon:"_"
                }
              }
            })
          });
        })
      
          console.log(ob.docs, "final");
          this.tableData = ob.docs;
          
        
      }
      else{
        this.hasGeneratedData = false;
      }
    }
  })
}

selectSemester(event:any){
this.semesterId =event.target.value;
this.tableData = [];
this.getData(false);

}
selectDepartment(event:any){
  if(event.target.value == "all"){
    console.log("all");
    this.tableData = [];
    this.getData(true);
  }
  else{
    this.departmentId =event.target.value;
    this.tableData = [];
  this.getData(false);
  }
  
  }
}
