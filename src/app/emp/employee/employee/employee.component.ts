import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import * as moment from 'moment';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  employeeName: string;
  candidate_data: any[];
  data: any[];
  distinctDeptMap;
  showdistinctDept = false;
  showEmpDetails = true;
  disabledinput = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.data = [];
    this.candidate_data = this.employeeService.getEmployees();
    this.data = this.candidate_data;
  }

  searchByName() {
    this.data = this.candidate_data;
    if (this.employeeName != "") {
      this.data = this.data.filter(res => {
        return res.name.toLocaleLowerCase().match(this.employeeName.toLocaleLowerCase());
      })
    } else if (this.employeeName == "") {
      this.ngOnInit();
    }
  }

  sortNameAsecnding() {
    this.data.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    })
  }

  sortNameDescending() {
    this.data.sort((b, a) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    })
  }

  sortjoinDateasecnding() {
    this.data.sort((a, b) => {
      if (a.joining_date < b.joining_date) return -1;
      else if (a.joining_date > b.joining_date) return 1;
      else return 0;
    })
  }
  sortJoinDateDescending() {
    this.data.sort((b, a) => {
      if (a.joining_date < b.joining_date) return -1;
      else if (a.joining_date > b.joining_date) return 1;
      else return 0;
    })
  }

  removeAll() {
    this.disabledinput = true;
    this.data = [];
    this.data = this.candidate_data;
    let employees = this.data.filter(data => data.department !== "Development")
    this.data = employees;
    this.showEmpDetails = true;
    this.showdistinctDept = false;
  }

  getDistinct() {
    this.data = [];
    this.data = this.candidate_data;
    this.disabledinput = true;
    this.distinctDeptMap = new Map<string, Number>();
    let cnt = 1;
    for (let emp of this.data) {
      if (this.distinctDeptMap.has(emp.department)) {
        this.distinctDeptMap.set(emp.department, this.distinctDeptMap.get(emp.department) + 1);
      }
      else {
        this.distinctDeptMap.set(emp.department, cnt);
      }
    }
    this.showEmpDetails = false;
    this.showdistinctDept = true;
  }

  getTwoYearsExperianceEmployee() {
    this.data = [];
    this.data = this.candidate_data;
    this.disabledinput = true;
    let currentDate = moment(new Date());
    this.data = this.data.filter(data => currentDate.diff(data.joining_date,'years') >= 2)
    this.showEmpDetails = true;
    this.showdistinctDept = false;
  }

}