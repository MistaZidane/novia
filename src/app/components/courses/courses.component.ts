import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
public data:any;
public departmentList:any;
public loaded = false;
public hasCourses = false;
public title: string = "";
public description: string = "";

  constructor(public dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getCourses().subscribe((ob:any)=>{

      if(ob.success){
             this.data = ob.docs;
             if(this.data.length >0){
                  this.hasCourses = true;
            }
             this.data.forEach((element:any) => {
              element.showDelete = false;
            });
            this.loaded = true;
      
      }
 
    });


    // getting list of departments

    this.dataService.getDepartments().subscribe((ob:any)=>{
      if(ob.success){
        this.departmentList = ob.docs;
      }
      console.log(ob);
      

    
    });
  }

  getData(){
    this.dataService.getCourses().subscribe((ob:any)=>{
      console.log(ob);
      this.data = ob.docs;
    })
  }

  createCourse(){
    this.dataService.createCourse(this.title,this.description).subscribe((ob: any)=>{
      console.log(ob);

      if(ob.success == true){
        console.log("true ok na");
        this.title = '';
        this.description = '';
        this.hasCourses = true;
        this.data.push(ob.docs)
        // this.getData();
        
        this.toastr.success('Course Added Successfully', 'Success');
      }
      else{
        this.toastr.error("Failed to add Course. Duplicate course Title","Failed");
      }
      
    })
  }

  showDeleteBtn(id:string){
    this.data.forEach((element:any) => {
      if(element._id == id){
        element.showDelete = true;
        this.toastr.warning("Double click to delete Class", "Delete")
      }
    });
    
   
  }

  deleteCourse(id:string){
    console.log(id);
    
    this.dataService.deleteCourse(id).subscribe((ob:any)=>{
      if(ob.success){
        if(this.data.length < 1 ){
          this.hasCourses = false;
        }
    this.data = this.data.filter((element:any)=>{
          return element._id != id;
        });
        this.toastr.success('Course Deleted Successfully', 'Success');
      }
      else{
        this.toastr.error("Failed to delete Course.","Failed");
      }
     
    })
  }
  // deleteCourse(id:string){

  //   this.dataService.deleteCourse(id).subscribe((ob:any)=>{
  //     if(ob.success){
  //       this.toastr.success('Course Deleted Successfully', 'Success');
       
  //       this.data = this.data.filter((el:any)=>{
  //         return el._id != id;
  //       });
  //     }
  //     else{
  //       this.toastr.error("Failed to delete Course.","Failed");
  //     }
  //   })
  // }

  selectCoursesByDepartMent(departmentId:string){
    console.log(departmentId);
    if(departmentId== 'all'){
      this.getData();
    }
    else{
      let arr = [];
      this.data =  this.departmentList.filter((el:any)=>{
        return el._id == departmentId;
      })[0].courses;
      
      
    }
    
  }

}
