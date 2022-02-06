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
public newDepartment: any = {
  name:"",
  size:0,
  campus: '',
  session:''
}
  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getCampuses().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.campuses = ob.docs;
        if(this.campuses.length >0){
          this.hasCampuses = true;
       }

        
      }
    });

    this.dataService.getSemester().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.semesters = ob.docs;
        if(this.semesters.length >0){
           this.hasSemesters = true;
        }
       
       
      }
    });
  }
  createDepartment(){
    console.log(this.newDepartment);

    this.dataService.createSDepartment(this.newDepartment).subscribe((ob:any)=>{
      console.log(ob);
      
      if(ob.success){
        this.toastr.success("Department created sussessfully", "success");
      }

    })
    
  }

}
