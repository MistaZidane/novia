import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-emailing',
  templateUrl: './emailing.component.html',
  styleUrls: ['./emailing.component.css']
})
export class EmailingComponent implements OnInit {
  public message: string  ='';
  public subject: string = '';
  public to: object = {};
   
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  sendEmail(){
    this.emailService.sendEmails(this.subject, this.message, {domain:"", lecturers:true, students:false}).subscribe(ob=>{
      console.log(ob);
      
    })
  }

}
