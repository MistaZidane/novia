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
public name:string ="";

public classData = {
  name:"",
  size:0,
  campusId:''
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
      
    })
   
  }

  addClass(){
    console.log({classes:this.classData}, 'data');

    this.dataService.addClassToCampus(this.classData).subscribe((ob:any)=>{

      if(ob.success){
        console.log(ob);
        this.classes.push(ob.docs);
        this.noClass = false;
        this.toast.success("Added Class Succesfully", "Success");
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
        if(this.classes.length !> 0){
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

}
