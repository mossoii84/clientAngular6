import {Employee} from "../employee/employee";

export  class Project {
  constructor(
    public id:number,
    public name:string,
    public theme:number,
    public employees:Employee[]){}

}
