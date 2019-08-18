import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceEmployee} from "./serviceEmployee";
import {FormControl, FormGroup} from "@angular/forms";
import {Employee} from "./employee";
import {ServiceProject} from "../project/serviceProject";
import {MatSort, MatTableDataSource, MatSortable} from "@angular/material";
import {Project} from "../project/project";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  MyFormCreatEmployee: any;
  //Для MatTableDataSource
  displayedColumns: string[] = ['name','age','project','delete','edit'];
  dataSource;
  @ViewChild(MatSort,{static: true}) sort: MatSort;

  // даннные из Project
  projectsInEmployee:Project[]=[];

  constructor( public serviceEmployee:ServiceEmployee, public serviceProject:ServiceProject){}

  ngOnInit(){
    this.MyFormCreatEmployee  = new FormGroup({
      id:new FormControl(),
      name:new FormControl(),
      age:new FormControl(),
      projects:new FormControl()
      })

    this.update();

    // //вывод для MatTableDataSource
    //  this.serviceEmployee.getAllEmployees().subscribe(result =>{this.dataSource= new MatTableDataSource(result);
    //   // this.dataSource.data = result;
    //   this.dataSource.sort = this.sort;
    // });


    //cтавим сюда Project, чтобы каждый раз не лазить через serviceProject
      this.serviceProject.getAllProjectInEmployee().subscribe((dataProj:Project[])=>this.projectsInEmployee=dataProj);
  }

  update(){
    this.serviceEmployee.getAllEmployees().subscribe(result =>{this.dataSource= new MatTableDataSource(result);
      // this.dataSource.data = result;
      this.dataSource.sort = this.sort;
    });
  }



  creatEmployee(MyFormCreatEmployee){
  this.serviceEmployee.savePostEmployee(MyFormCreatEmployee).
  subscribe((data:Employee)=>this.update());
    // this.serviceEmployee.employees.push(data)); // это не из реактивной формы
  }


 deleteEmployeeAndProject(id:number){
    this.serviceEmployee.deleteEmployee(id).subscribe((data:Employee)=>this.update());
      // this.serviceEmployee.getAllEmployees());
 }



}
