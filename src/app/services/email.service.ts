import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public sendEmails(subject:string, message:string, to:object){
   return this.http.post<{token: string}>('http://localhost:8000/send-mail', {subject: subject, message: message,to});
  }
}
