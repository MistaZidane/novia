import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-departments',
  templateUrl: './view-departments.component.html',
  styleUrls: ['./view-departments.component.css']
})
export class ViewDepartmentsComponent implements OnInit {
public data:any = [];
public showDepartments = false;
public hasDepartments = false;
  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getDepartments().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob);
        this.showDepartments = true;
        this.data = ob.docs;
        if(this.data.length > 0){
          this.hasDepartments  = true;
        }
        
      }
    })
  }

  showDeleteBtn(id:string){
    this.data.forEach((element:any) => {
      if(element._id == id){
        element.showDelete = true;
        this.toastr.warning("Double click to delete Department", "Delete")
      }
    });
    
   
  }

  deleteDepartment(id:string){
    console.log(id);
    
    this.dataService.deleteDepartment(id).subscribe((ob:any)=>{
      if(ob.success){
        if(this.data.length !> 0){
          this.hasDepartments = false;
        }
    this.data = this.data.filter((element:any)=>{
          return element._id != id;
        });
        this.toastr.success('Department Deleted Successfully', 'Success');
      }
      else{
        this.toastr.error("Failed to delete Department.","Failed");
      }
     
    })
  }

}
