import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
public campuses:any = [];
public semesters:any = [];
public hasCampuses = false;
public hasSemesters = false;
  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getCampuses().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.hasCampuses = true;
        this.campuses = ob.docs;
      }
    });

    this.dataService.getSemester().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.hasSemesters = true;
        this.semesters = ob.docs;
      }
    });
  }

}
