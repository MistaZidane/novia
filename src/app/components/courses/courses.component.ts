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
public lecturers:any = [];
public hasLecturers:any = false;
public selectedLecturers: any = [];
public lecturerSelected = false;
public departmentList:any;
public hasDepartments = false;
public loaded = false;
public hasCourses = false;
public generalCourse = false;
public selectedDepartments:any = [];
public departmentSelected = false;
public title: string = "";
public description: string = "";


  constructor(public dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getCourses().subscribe((ob:any)=>{

      if(ob.success){
             this.data = ob.docs;
             console.log(ob.docs);
             
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
        this.hasDepartments = true;
      }
      console.log(ob);
      

    
    });

    
    this.dataService.getLecturers().subscribe((ob:any)=>{
      if(ob.success){
        this.lecturers = ob.docs;
        this.hasLecturers = true;
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
    console.log(this.selectedDepartments);
    let finalDerpartments:any = [];
    let finalLecturers:any = [];
    this.selectedDepartments.forEach((el:any) => {
    finalDerpartments.push(el.id);
    });
    this.selectedLecturers.forEach((el:any) => {
      finalLecturers.push(el.id);
      });
if(this.generalCourse){
  this.departmentList.forEach((element:any) => {
    finalDerpartments.push(element._id)
  });
}
  let newData = {
    title:this.title,
    description:this.description,
    general:this.generalCourse,
    departments: finalDerpartments,
    lecturers: finalLecturers
  }
    this.dataService.createCourse(newData).subscribe((ob: any)=>{
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
  checkDepartment(event:any, id:string){

    let index = this.selectedDepartments.findIndex((ele:any)=>{
      return ele.id == id
    });
    console.log(index);
    if(index == -1){
      if(event.target.checked  == true){
        this.selectedDepartments.push({id,checked:event.target.checked  })
      }
       
    }
    else{
      if(event.target.checked  == false){
        this.selectedDepartments.splice(index,1)
      }
    }

   if(this.selectedDepartments.length >0){
     this.departmentSelected = true;
   }
   else{
     this.departmentSelected = false;
   }
    console.log(this.selectedDepartments);

  }
  checkLecturer(event:any, id:string){
    let index = this.selectedLecturers.findIndex((ele:any)=>{
      return ele.id == id
    });
    console.log(index);
    if(index == -1){
      if(event.target.checked  == true){
        this.selectedLecturers.push({id,checked:event.target.checked  })
      }
       
    }
    else{
      if(event.target.checked  == false){
        this.selectedLecturers.splice(index,1)
      }
    }

   if(this.selectedLecturers.length >0){
     this.lecturerSelected = true;
   }
   else{
     this.lecturerSelected = false;
   }
    console.log(this.selectedLecturers);
  }
  selectGeneral(event:any){
    this.generalCourse = event.target.checked;

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
