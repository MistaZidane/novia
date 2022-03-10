import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
public tableData:any = [];
public departments:any = [];
public dataToDisplay:any = {};
public showDepartment = false;
public showSemester = false;
public selectedDepartment:string = "";
public selectedSemester:string = "";
public semesters:any = [];
public  dataLoaded = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.getTimeTable().subscribe((ob:any)=>{
    //   if(ob.success){
    //     console.log(ob.docs);
    //     this.data = ob.docs[0];
    //     this.dataLoaded = true;

    //   }
    // })
this.dataService.getDepartments().subscribe((ob:any)=>{
  if(ob.success){
    this.departments = ob.docs;
    this.showDepartment = true;
    this.selectedDepartment = ob.docs[0]._id;
    this.dataService.getSemester().subscribe((obS:any)=>{
      if(obS.success){
        this.semesters = obS.docs;
        this.showSemester = true;
        this.selectedSemester = obS.docs[0]._id;
     this.getData();
      }
    });
  }
});


  }
// {data:[{lecturer:"", course:""}]}


  getData(){
    this.dataService.getTimeTable(this.selectedSemester,this.selectedDepartment).subscribe((obDa:any)=>{
      if(obDa.success){
        this.tableData = obDa.docs[0];
       
        let data = obDa.docs[0].table[0];
        // data organizer
      let daysInweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let templateData:any = {
          firstPeriod:[],
          secPeriod:[],
          thirdPeriod:[],
          fourthPeriod:[]
        };
        daysInweek.forEach((day:string, index:any)=>{
          templateData.firstPeriod.push( {day:day, dayIndex:index+1,course:"", lecturer:''});
          templateData.secPeriod.push( {day:day, dayIndex:index+1,course:"", lecturer:''});
          templateData.thirdPeriod.push( {day:day, dayIndex:index+1,course:"", lecturer:''});
          templateData.fourthPeriod.push( {day:day, dayIndex:index+1,course:"", lecturer:''});
        });
       console.log(templateData,"temp");
       
     
      data.firstPeriod.forEach((element:any) => {
    
        templateData.firstPeriod[element.dayIndex -1] = element;
      });
      data.secPeriod.forEach((element:any) => {
     
        templateData.secPeriod[element.dayIndex -1] = element;
        
      });
      data.thirdPeriod.forEach((element:any) => {
   
        templateData.thirdPeriod[element.dayIndex -1] = element;
        
      });
      data.fourthPeriod.forEach((element:any) => {
       
        templateData.fourthPeriod[element.dayIndex -1] = element;
        
      });
   
          console.log(data);
          this.dataLoaded = true;
          this.dataToDisplay = templateData;
        
      }
    })
  }

  selectSemester(event:any){
    this.selectedSemester = event.target.value;
    this.tableData = [];
    console.log(event.target.value);
    this.getData();
    // this.getData(false);
    
    }
    selectDepartment(event:any){
      this.selectedDepartment = event.target.value;
      console.log(event.target.value);
      this.getData();
 
      
      }

}


        