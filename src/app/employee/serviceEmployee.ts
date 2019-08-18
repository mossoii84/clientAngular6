import {Injectable} from "@angular/core";
import {Employee} from "./employee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class ServiceEmployee {


  employees:Employee[]=[];
  private url="http://localhost:8080/employee/";
  constructor(private http:HttpClient){}


  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }



  savePostEmployee(MyFormCreatEmployee){
    return this.http.post(this.url,MyFormCreatEmployee);
  }


  deleteEmployee(id:number){
    return this.http.delete(this.url + id);
  }



}
