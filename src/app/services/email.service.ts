import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public sendEmails(data:any){
   return this.http.post<{token: string}>('http://localhost:8001/send-mail',data);
  }
}
