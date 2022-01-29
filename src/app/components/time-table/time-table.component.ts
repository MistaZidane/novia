import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
public data:any;
public  dataLoaded = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTimeTable().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.data = ob.docs[0];
        this.dataLoaded = true;

      }
    })

  }

}
