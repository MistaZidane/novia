import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  public data:any;
  public loaded = false;
  public hasSemester = false;
 public newSemester = {
   name: "",
   description:""
 }
  constructor(public dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getSemester().subscribe((ob:any)=>{

      if(ob.success){
             this.data = ob.docs;
             if(this.data.length >0){
                  this.hasSemester = true;
            }
             this.data.forEach((element:any) => {
              element.showDelete = false;
            });
            this.loaded = true;
      
      }
 
    });
  }

  getData(){
    this.dataService.getSemester().subscribe((ob:any)=>{
      console.log(ob);
      this.data = ob.docs;
    })
  }

  createSemester(){
    this.dataService.createSemester(this.newSemester).subscribe((ob: any)=>{
      console.log(ob);

      if(ob.success == true){
        console.log("true ok na");
        this.newSemester.name = '';
        this.newSemester.description = '';
        this.hasSemester = true;
        this.data.push(ob.docs)
        // this.getData();
        
        this.toastr.success('Semester Added Successfully', 'Success');
      }
      else{
        this.toastr.error("Failed to add Semester. Duplicate course Title","Failed");
      }
      
    })
  }
  showDeleteBtn(id:string){
    this.data.forEach((element:any) => {
      if(element._id == id){
        element.showDelete = true;
        this.toastr.warning("Double click to delete Semester", "Delete")
      }
    });
    
   
  }

  deleteSemester(id:string){
    console.log(id);
    
    this.dataService.deleteSemester(id).subscribe((ob:any)=>{
      if(ob.success){
        if(this.data.length < 1){
          this.hasSemester = false;
        }
    this.data = this.data.filter((element:any)=>{
          return element._id != id;
        });
        this.toastr.success('Semester Deleted Successfully', 'Success');
      }
      else{
        this.toastr.error("Failed to delete Semester.","Failed");
      }
     
    })
  }
}
