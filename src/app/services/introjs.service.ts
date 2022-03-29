import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IntrojsService {
 public buttons:any = [ {
  classes: 'shepherd-button-secondary',
  text: 'Exit',
  type: 'cancel'
},
{
  classes: 'shepherd-button-primary',
  text: 'Back',
  type: 'back'
},
{
  classes: 'shepherd-button-primary',
  text: 'Next',
  type: 'next'
}];
public steps:any = [

  {
    id: 'intro',
    attachTo: { 
      element: '.profile', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Profile',
    text: ['You can Logout here.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'home',
    attachTo: { 
      element: '#home', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Home Page',
    text: ['Here you can have a quick view of statistics like course count..'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'courses',
    attachTo: { 
      element: '#courses', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Courses',
    text: ['Here you can Add, Delete, Update and asign Courses to Departments and Lecturers'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'campuses',
    attachTo: { 
      element: '#campuses', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Campuses',
    text: ['Here you can Add, Delete, Update and add classes to Campuses'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'Lecturers',
    attachTo: { 
      element: '#lecturers', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Lecturers',
    text: ['Here you can Add, Delete, Update and view Lecturers'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'departments',
    attachTo: { 
      element: '#departments', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Departments',
    text: ['Here you can Add, Delete, Update and view Departments. You can edit all the course infomation like day, semester, period and lecturer responsible for the course.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'semester',
    attachTo: { 
      element: '#semester', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Semester',
    text: ['Here you can Add, Delete, Update and view Semesters.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'timeTable',
    attachTo: { 
      element: '#timeTable', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Semester',
    text: ['Here you can View Generated time table by department and semester'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'seating',
    attachTo: { 
      element: '#seating', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Seatings Table',
    text: ['Here you can View Generated Seatings table by department and semester.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'mailing',
    attachTo: { 
      element: '#mailing', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Mailing',
    text: ['Here you can Send bulk mails to: Students and Lecturers of a particular campus, department, to all teachers, to all students or to all teachers and students.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'emails',
    attachTo: { 
      element: '#emails', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Emails',
    text: ['Here you can add bulk mails like the emails of Students and Lecturers of a particular campus and department.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'generate',
    attachTo: { 
      element: '#generate', 
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(() =>{
          window.scrollTo(0, 0);
         resolve(resolve)
        }, 500);
      });
    },
    buttons: this.buttons,
    cancelIcon: {
      enabled: true
    },
    classes: 'profile custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Generate',
    text: ['Here you can generate a Time and Seating table for a particular Semester and Campus'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
];

  constructor() { }

}
