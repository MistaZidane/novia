import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';


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
    TimeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200/login'],
        disallowedRoutes: ['localhost:4200']
      }
    })
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
