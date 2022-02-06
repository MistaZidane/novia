import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './components/campus/campus.component';
import { EditCampusesComponent } from './components/campus/edit-campuses/edit-campuses.component';
import { ViewCampusesComponent } from './components/campus/view-campuses/view-campuses.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import { DepartmentCourseComponent } from './components/departments/department-course/department-course.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EditDepartmentsComponent } from './components/departments/edit-departments/edit-departments.component';
import { ViewDepartmentsComponent } from './components/departments/view-departments/view-departments.component';
import { EmailingComponent } from './components/emailing/emailing.component';
import { GenerateComponent } from './components/generate/generate.component';
import { HomeComponent } from './components/home/home.component';
import { LecturerComponent } from './components/lecturer/lecturer.component';
// import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogsComponent } from './components/logs/logs.component';
import { MainComponent } from './components/main/main.component';
import { SeatingComponent } from './components/seating/seating.component';
import { SemesterComponent } from './components/semester/semester.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { AuthGuard } from './guard/auth.guard';
import { SignedInGuard } from './guard/signed-in.guard';

const routes: Routes = [
  {path:'', component:MainComponent, canActivate:[AuthGuard], children:[
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'courses', component:CoursesComponent},
    {path:'campus', component:CampusComponent, children:[
      {path:'', component: ViewCampusesComponent},
      {path:'view-campuses', component: ViewCampusesComponent},
      {path:'edit-campus/:id', component: EditCampusesComponent}
    ]},
    {path:'lecturers', component: LecturerComponent},
    {path:'departments', component: DepartmentsComponent, children:[
      {path:'', component: ViewDepartmentsComponent},
      {path:'view-departments', component: ViewDepartmentsComponent},
      {path:'edit-department/:id', component: EditDepartmentsComponent},
      {path:'courses/:id', component:DepartmentCourseComponent },
      {path:'add-department', component:AddDepartmentComponent }
    ] },
    {path:'time-table', component: TimeTableComponent},
    {path:'seating', component: SeatingComponent},
    {path:'logs', component: LogsComponent},
    {path:'emailing', component: EmailingComponent},
    {path:'semester', component: SemesterComponent},
    {path:'generate', component: GenerateComponent},

  ] },
  {path:"login", component:LoginComponent, canActivate: [SignedInGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
