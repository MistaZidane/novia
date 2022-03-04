import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {
public courses:any;
public lecturers:any;
public showdata = false;
public hasCourses = false;
public hasLecturers = false;
public courseSelected = false;
public newLecturer = {
  name:"",
  email:"",
  phone:"",
  courses:[]
}
public selectedCourses:any = [];
  constructor(private dataService:DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getCourses().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob);
        this.courses = ob.docs

        if(this.courses.length >0){
          this.hasCourses = true;
         
        }
      }
    });

    this.dataService.getLecturers().subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob);
        this.lecturers = ob.docs;
        if(this.lecturers.length >0){
          this.hasLecturers = true;
         
        }
        else{
          this.hasLecturers = false;
        }
        this.lecturers.forEach((element:any) => {
          element.showDelete = false;
        });
      }
    })
  }

  checkCourse(event:any, id:string){
    // console.log(event.target.checked, id);
    // check if it exist already allowing us to take note only of the true checks
 
    let index = this.selectedCourses.findIndex((ele:any)=>{
      return ele.id == id
    });
    console.log(index);
    if(index == -1){
      if(event.target.checked  == true){
        this.selectedCourses.push({id,checked:event.target.checked  })
      }
       
    }
    else{
      if(event.target.checked  == false){
        this.selectedCourses.splice(index,1)
      }
    }

   if(this.selectedCourses.length >0){
     this.courseSelected = true;
   }
   else{
     this.courseSelected = false;
   }
    console.log(this.selectedCourses);
    
  }

  showDeleteBtn(id:string){
    this.lecturers.forEach((element:any) => {
      if(element._id == id){
        element.showDelete = true;
        this.toastr.warning("Double click to delete Class", "Delete")
      }
    });
    
   
  }

  deleteCourse(id:string){
    console.log(id);
    
    this.dataService.deleteLecturer(id).subscribe((ob:any)=>{
      if(ob.success){
        if(this.lecturers.length > 0){
          this.hasLecturers = true;
        }
       
    this.lecturers = this.lecturers.filter((element:any)=>{
          return element._id != id;
        });
        this.toastr.success('Course Deleted Successfully', 'Success');
      }
      else{
        this.toastr.error("Failed to delete Course.","Failed");
      }
     
    })
  }

  addLecturer(){
    let finalCourses:any = [];
    this.selectedCourses.forEach((el:any) => {
    finalCourses.push(el.id);
    });

    this.newLecturer.courses = finalCourses;
    console.log(this.newLecturer, "new lecturer");
    this.dataService.createLecturer(this.newLecturer).subscribe((ob:any)=>{
      if(ob.success){
        this.toastr.success('Lecturer created Successfully', 'Success');
        this.lecturers.push(ob.docs);
        this.hasLecturers = true;
      }
      else{
        this.toastr.error("Failed to create Lecturer.","Failed");
      }
    })
  }
}
