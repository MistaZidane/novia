import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {
public data:any;
public dataLoaded = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    // this.dataService.getCampuses().subscribe((ob:any)=>{
    //   if(ob.success){
    //     console.log(ob.docs);
    //     this.data = ob.docs;
    //     this.dataLoaded = true;
        
    //   }
    // })
  }

}
