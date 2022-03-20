import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  toggle(){
    let sideBarBtn =<HTMLButtonElement> document.querySelector('.nav-toggler-btn');
let sideBar =<HTMLElement> document.querySelector('.dashboard-grid .sidebar');
let main = <HTMLElement> document.querySelector('.dashboard-grid .main');
let header = <HTMLElement> document.querySelector('.dashboard-grid .main header');
let footer =<HTMLElement> document.querySelector('.dashboard-grid .main footer');


    sideBar.classList.toggle('show');
    main.classList.toggle('expand');
    header.classList.toggle('expand');
    footer.classList.toggle('expand');


  }

  profileBtn(){
    // creating the user menu toggler
  let userMenu =<HTMLElement> document.querySelector('.user-menu');
  let profileBtn = <HTMLButtonElement> document.querySelector('.profile-btn');
  
  
  
      userMenu.classList.toggle('show');
  
  
  
  }

//   toggleSearchForm(){
//     let searchBtn =<HTMLButtonElement> document.querySelector('.search-btn');
// let searchForm =<HTMLInputElement> document.querySelector('form.search');


//     searchForm.classList.toggle('show');

//   }

}
