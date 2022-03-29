import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as jsPDF from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import  htmlToPdfmake from 'html-to-pdfmake';
import 'jspdf-autotable';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  @ViewChild('pdfTable') pdfTable: any;
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

  public downloadAsPDF() {
    const doc = new jsPDF.jsPDF();
   
    const pdfTable = this.pdfTable.nativeElement;
   let title =`  <h1>Time Table for ${ this.tableData.name}</h1>`.toUpperCase()
    var html = htmlToPdfmake(title+pdfTable.innerHTML);
     
    const documentDefinition = { content: html};
    pdfMake.createPdf(documentDefinition).download(`${ this.tableData.name}timeTable.pdf`); 
     
  }
  createPdf() {
    var doc = new  jsPDF.jsPDF();

    doc.setFontSize(18);
    doc.text('Time Table', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);
console.log(this.dataToDisplay.firstPeriod[0],"okahsxs");

    (doc as any).autoTable({
      head:  [["Time","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]],
      body: [
        this.dataToDisplay.firstPeriod
      ],
      theme: 'plain',
      didDrawCell: (data:any) => {
        console.log(data.column.index)
        console.log(data);
        
      }
    })
   // below line for Open PDF document in new tab
   doc.output('dataurlnewwindow')

   // below line for Download PDF document  
   doc.save('timeTable.pdf');
  
  }
  
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
      if(obDa.success && obDa.docs[0]){
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
   
          console.log(obDa.docs[0],"***************************** here");
          if(obDa.docs[0].table.length > 0){
              this.dataLoaded = true;
          }
        else{
          this.dataLoaded = false;
        }
          this.dataToDisplay = templateData;

        
      }
      else{
        this.dataLoaded = false
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


        