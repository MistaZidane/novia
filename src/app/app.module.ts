import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { JwtModule,JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { CampusComponent } from './components/campus/campus.component';
import { LecturerComponent } from './components/lecturer/lecturer.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { JwtInterceptor } from './jwt.interceptor';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { SeatingComponent } from './components/seating/seating.component';
import { EmailingComponent } from './components/emailing/emailing.component';
import { GenerateComponent } from './components/generate/generate.component';
import { ViewDepartmentsComponent } from './components/departments/view-departments/view-departments.component';
import { EditDepartmentsComponent } from './components/departments/edit-departments/edit-departments.component';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import { ViewCampusesComponent } from './components/campus/view-campuses/view-campuses.component';
import { EditCampusesComponent } from './components/campus/edit-campuses/edit-campuses.component';
import { SemesterComponent } from './components/semester/semester.component';
import { DepartmentCourseComponent } from './components/departments/department-course/department-course.component';
import { DialogComponent } from './components/departments/department-course/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StatsComponent } from './components/stats/stats.component';
import { EmailsComponent } from './components/emails/emails.component';



export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    MainComponent,
    SideBarComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    UserMenuComponent,
    CoursesComponent,
    CampusComponent,
    LecturerComponent,
    DepartmentsComponent,
    TimeTableComponent,
    SeatingComponent,
    EmailingComponent,
    GenerateComponent,
    ViewDepartmentsComponent,
    EditDepartmentsComponent,
    AddDepartmentComponent,
    ViewCampusesComponent,
    EditCampusesComponent,
    SemesterComponent,
    DepartmentCourseComponent,
    DialogComponent,
    StatsComponent,
    EmailsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200/login'],
        disallowedRoutes: ['localhost:4200']
      }
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
{
  provide:HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi:true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
