import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './components/campus/campus.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { HomeComponent } from './components/home/home.component';
import { LecturerComponent } from './components/lecturer/lecturer.component';
// import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { AuthGuard } from './guard/auth.guard';
import { SignedInGuard } from './guard/signed-in.guard';

const routes: Routes = [
  {path:'', component:MainComponent, canActivate:[AuthGuard], children:[
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'courses', component:CoursesComponent},
    {path:'campus', component:CampusComponent},
    {path:'lecturers', component: LecturerComponent},
    {path:'departments', component: DepartmentsComponent},
    {path:'time-table', component: TimeTableComponent},

  ] },
  {path:"login", component:LoginComponent, canActivate: [SignedInGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
