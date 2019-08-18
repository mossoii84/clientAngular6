import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import {ServiceEmployee} from "./employee/serviceEmployee";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatTableModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule, MatSortModule, MatSort
} from '@angular/material';
import {ServiceProject} from "./project/serviceProject";
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'project', component: ProjectComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,BrowserAnimationsModule,BrowserModule,
     MatTableModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatButtonModule,MatInputModule,MatIconModule,
     MatSortModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceEmployee, ServiceProject],
  bootstrap: [AppComponent]
})
export class AppModule { }
