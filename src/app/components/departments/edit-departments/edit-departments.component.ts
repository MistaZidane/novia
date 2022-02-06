import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {

public id:string = '';
public department:any = [];
public showData = false;
public newDepartmentInfo: any = {
  name:"",
  size:0,
  campus: '',
  session:''
}
  public campuses: any = [];
 public hasCampuses = false;
constructor(private dataService: DataService, private route: ActivatedRoute,  private toast: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param:any)=>{
      console.log(param.id,"pa");
      this.id = param.id
 this.getData(param.id);

      
    });
    // this.dataService.getClassesByCampusId(this.id).subscribe((ob:any)=>{
    //   if(ob.success){
    //     console.log(ob);
    //     this.classes = ob.docs;
    //     this.classes.forEach((element:any) => {
    //       element.showDelete = false;
    //     });
    //     if(ob.docs.length >0){
    //       this.noClass = false;
    //     }
    //   }
    // })
    this.dataService.getCampuses().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob.docs);
        this.campuses = ob.docs;
        if(this.campuses.length >0){
          this.hasCampuses = true;
       }

        
      }
    });
  }

  getData(id:string){
    this.dataService.getDepartmentById(id).subscribe((ob:any)=>{
      if(ob.success){
        // console.log(ob.docs);
        this.department = ob.docs;
        this.newDepartmentInfo.name = ob.docs.name;
        this.newDepartmentInfo.size = ob.docs.size
        console.log(ob.docs);
        
        this.showData = true;
      }
    });
  }
updateDepartment(){
console.log(this.newDepartmentInfo);
this.dataService.updateDepartment(this.id,this.newDepartmentInfo).subscribe((ob:any)=>{
  if(ob.success){
    this.toast.success("Department Updated", "success");
    this.getData(this.id);
  }
  else{
    this.toast.error("Department NOT updated", "Failed")
  }
})

}

}
