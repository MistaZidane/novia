import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
public department = '';
public emailsType = false;
public emails = ``;
public departments:any = [];
public showDepartments = false;
constructor(private dataService: DataService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getDepartments().subscribe((ob:any)=>{
      if(ob.success){
        this.departments = ob.docs;
        this.department = ob.docs[0]._id;
        this.showDepartments = true;
      }
    })
  }

  addEmails(){
    console.log("okay");
    let data:any = {
      lecturer:this.emailsType,
      department:this.department,
      emails:this.emails

    };

    this.dataService.createEmails(data).subscribe((ob:any)=>{
      if(ob.success){
        this.toast.success('Emails added successfully', 'Success');
      }
      else{
        this.toast.error("Failed to add emails.","Failed");
      }
    })
    
    
  }
}
