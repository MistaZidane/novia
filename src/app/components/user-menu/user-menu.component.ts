import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


userMenuClose(){
  let userMenu =<HTMLElement> document.querySelector('.user-menu');
    userMenu.classList.remove('show');
}
}
