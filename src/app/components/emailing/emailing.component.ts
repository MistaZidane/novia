import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-emailing',
  templateUrl: './emailing.component.html',
  styleUrls: ['./emailing.component.css']
})
export class EmailingComponent implements OnInit {
  public message: string  ='';
  public subject: string = '';
  public to: object = {};
  public lecturers = true;
  public students = false;
  public department = 'all';
  public departments:any = [];
public showDepartments = false;
   
  constructor(private emailService: EmailService,private dataService: DataService, private toast: ToastrService) { }

  ngOnInit(): void { 
     this.dataService.getDepartments().subscribe((ob:any)=>{
    if(ob.success){
      this.departments = ob.docs;
      
      this.showDepartments = true;
    }
  })
  }

  sendEmail(){
    console.log(this.lecturers);
    console.log(this.department);

    let data = {
      lecturer: this.lecturers,
      department:this.department,
      message: this.message,
      subject: this.subject
    }
    console.log(data);
    
    this.emailService.sendEmails(data).subscribe((ob:any)=>{
     if(ob.success){
      this.toast.success("Emails sent", "success")
     }
     else{
       this.toast.error("Emails not sent", "error")
     }
      
    })
  }

 

}
