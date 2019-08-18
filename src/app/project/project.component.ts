import { Component, OnInit } from '@angular/core';
import {ServiceProject} from "./serviceProject";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor( public serviceProject:ServiceProject) { }

  ngOnInit() {
    this.serviceProject.getAllProject();
  }

}
