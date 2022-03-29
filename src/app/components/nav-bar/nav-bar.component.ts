import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IntrojsService } from 'src/app/services/introjs.service';
import { ShepherdService } from 'angular-shepherd';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,AfterViewInit {

public steps:any = [];
  constructor(private introService: IntrojsService,private shepherdService: ShepherdService) { }

  ngOnInit(): void {
 this.steps = this.introService.steps;
  }
  ngAfterViewInit(): void {
    this.shepherdService.defaultStepOptions = {
      classes: 'profile custom-class-name-2',
      scrollTo: false,
      cancelIcon: {
        enabled: true
      }
    };
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
  
  
}
startTour(){
  this.shepherdService.requiredElements = [
    {
      selector: '.profile',
      message: 'No search results found. Please execute another search, and try to start the tour again.',
      title: 'No results'
    },
    {
      selector: '.sidebar',
      message: 'To continue the tour, You have to open the side bar',
      title: 'Side Bar closed'
    },
  ];
  this.shepherdService.addSteps(
  this.steps
  );
    this.shepherdService.start();
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
