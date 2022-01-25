import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
public user:any
public loaded = false;
  constructor(private userServise: AuthService, private router: Router) { }

  ngOnInit(): void {
    let str = localStorage.getItem('user') || "";
this.user = JSON.parse(str)
this.loaded = true;


  }

logout(){
this.userServise.logout();
this.router.navigate(['login']);
}
userMenuClose(){
  let userMenu =<HTMLElement> document.querySelector('.user-menu');
    userMenu.classList.remove('show');
}
}
