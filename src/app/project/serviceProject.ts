import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Project} from "./project";

@Injectable()
export  class ServiceProject {


  projects:Project[]=[];
  private url="http://localhost:8080/project/";
  constructor(private http:HttpClient){}


  getAllProject(){
    return this.http.get(this.url).subscribe((data:Project[])=>this.projects=data);
  }

  getAllProjectInEmployee(){
    return this.http.get(this.url);
  }




}
