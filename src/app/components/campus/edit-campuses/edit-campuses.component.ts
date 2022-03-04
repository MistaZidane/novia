import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-campuses',
  templateUrl: './edit-campuses.component.html',
  styleUrls: ['./edit-campuses.component.css']
})
export class EditCampusesComponent implements OnInit {
public data:any;
public showData = false;
public noClass =  true;
public id:string = '';
public classes:any;
public showDepartments = false;
public hasDepartments = false;
public departmentSelected = false;
public selectedDepartments:any = [];
public departmentList:any = [];
public name:string ="";

public classData = {
  name:"",
  size:0,
  campusId:'',
  isLab: false,
  departments: []
};
  constructor(private dataService: DataService, private route: ActivatedRoute,  private toast: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param:any)=>{
      console.log(param.id,"pa");
      this.id = param.id
      this.classData.campusId = param.id;
       this.dataService.getCampuseById(param.id).subscribe((ob:any)=>{
      if(ob.success){
        // console.log(ob.docs);
        this.data = ob.docs;
        this.name = ob.docs.name;
        this.showData = true;
      }
    });
    this.dataService.getClassesByCampusId(this.id).subscribe((ob:any)=>{
      if(ob.success){
        console.log(ob);
        this.classes = ob.docs;
        this.classes.forEach((element:any) => {
          element.showDelete = false;
        });
        if(ob.docs.length >0){
          this.noClass = false;
        }
      }
    })
      
    });
    this.dataService.getDepartments().subscribe((ob:any)=>{
      if(ob.success){
        this.departmentList = ob.docs;
        this.hasDepartments = true;
      }
      console.log(ob);
      

    
    });
   
  }

  addClass(){
    console.log({classes:this.classData}, 'data');
   
    let finalDerpartments:any = [];
    this.selectedDepartments.forEach((el:any) => {
    finalDerpartments.push(el.id);
    });
    this.classData.departments = finalDerpartments;
    
    this.dataService.addClassToCampus(this.classData).subscribe((ob:any)=>{

      if(ob.success){
        console.log(ob);
        this.classes.push(ob.docs);
        this.noClass = false;
        this.toast.success("Added Class Succesfully", "Success");
        finalDerpartments = [];
        
      }
      else{
        this.toast.warning("Classname exist", "Exist");
      }
    })
    
  }


  showDeleteBtn(id:string){
    this.classes.forEach((element:any) => {
      if(element._id == id){
        element.showDelete = true;
        this.toast.warning("Double click to delete Class", "Delete")
      }
    });
    
   
  }

  delete(id:string){
    console.log(id);
    
    this.dataService.deleteClass(id).subscribe((ob:any)=>{
      if(ob.success){
        if(this.classes.length > 0){
          this.noClass = false;
         
        }
        else{
          this.noClass = true;
        }
        this.classes = this.classes.filter((element:any)=>{
          return element._id != id;
        });
        this.toast.success("Class Deleted", "Deleted")
      }
     
    })
  }

  updateName(){
    console.log(this.data.name);
    this.dataService.editCampusName(this.data.name, this.id).subscribe((ob:any)=>{
      if(ob.success){
        this.toast.success("Campus Name Updated", "Success");
      }
      else{
        this.toast.warning("Campus Name exist", "Exist");
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
checkIsLab(event:any){
if( event.target.value == 'true'){
this.showDepartments = true;
}
else{
this.showDepartments = false;
}

// console.log( Boolean(event.target.value));

}
}
