import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  public showCampus:boolean = false;
  public showSemester:boolean = false;
  public campuses:any = [];
  public semesters:any = [];

public data:any = {
    semester:"",
    campus:""
}
  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getCampuses().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.showCampus = true;
        this.campuses =ob.docs;
      }
    });
    this.dataService.getSemester().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.showSemester = true;
        this.semesters = ob.docs;
      }
    });
  }
  generate(){
    console.log(this.data);
    this.dataService.generate(this.data).subscribe((ob:any)=>{
      if(ob.success){
        console.log("yes");
        console.log(ob.docs);
        if(ob.docs.length == 0){
          this.toastr.warning("No data found","")
        }
        else{
          this.toastr.success("Time and seatings table generated","Success")
        }
        
      }
      else{
        console.log("no");
        
      }
    })
    
  }

}
