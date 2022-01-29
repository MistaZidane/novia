import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-campuses',
  templateUrl: './view-campuses.component.html',
  styleUrls: ['./view-campuses.component.css']
})
export class ViewCampusesComponent implements OnInit {
  public data:any;
  public dataLoaded = false;
  public title = "";
  public showDelete = false;
    constructor(private dataService: DataService, private toast: ToastrService) { }
  
    ngOnInit(): void {
  
      this.dataService.getCampuses().subscribe((ob:any)=>{
        if(ob.success){
          console.log(ob.docs);
          this.data = ob.docs;
          this.data.forEach((element:any) => {
            element.showDelete = false;
          });
          this.dataLoaded = true;
          
        }
      })
    }

    addCampus(){
      this.dataService.createCampus(this.title).subscribe((ob:any)=>{
        if(ob.success){
          this.toast.success("Added Campus Succesfully", "Success");
          console.log(ob);
          
          this.data.push(ob.docs)
        }
        else{
          this.toast.error("Failed to add Campus", "Campus Name Exist");
        }
      });
    }

    showDeleteBtn(id:string){
      this.data.forEach((element:any) => {
        if(element._id == id){
          element.showDelete = true;
          this.toast.warning("Double click to delete", "Delete")
        }
      });
      
     
    }

    delete(id:string){
      this.dataService.deleteCampus(id).subscribe((ob:any)=>{
        if(ob.success){
      this.data = this.data.filter((element:any)=>{
            return element._id != id;
          });
          this.toast.success("Campus Deleted", "Deleted")
        }
       
      })
    }
}
