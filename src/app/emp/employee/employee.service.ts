import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  candidate_data;
  constructor() {
    this.candidate_data = [{
      "id": 11,
      "name": "Ash",
      "department": "Finance",
      "joining_date": " 8/10/2016"
    },
    { "id": 12, "name": "John", "department": "HR", "joining_date": "18/1/2011" },
    { "id": 13, "name": "Zuri", "department": "Operations", "joining_date":"28/11/2019" },
    { "id": 14, "name": "Vish", "department": "Development", "joining_date":"7/7/2020" },
    { "id": 15, "name": "Barry", "department": "Operations", "joining_date":"19/8/2014" },
    { "id": 16, "name": "Ady", "department": "Finance", "joining_date":"5/10/2014" },
    { "id": 17, "name": "Gare", "department": "Development", "joining_date":"6/10/2018" },
    { "id": 18, "name": "Hola", "department": "Development", "joining_date":"1/1/2017" },
    { "id": 19, "name": "Ola", "department": "HR", "joining_date":"7/5/2011"},
    { "id": 20, "name": "Kim", "department": "Finance", "joining_date":"6/5/2011" }]

  }
  getEmployees() {
    let employees = this.convertDate();
    return employees
  }
  convertDate() {
   let employeeData=[];
     this.candidate_data.forEach(data=>{
       let jdate=moment(data.joining_date,'DD/MM/YYYY').toDate();
       let details={"id":data.id,"name":data.name,"department":data.department,"joining_date":jdate}
       employeeData.push(details);
     })
     return employeeData;
  }

}
